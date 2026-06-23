import { getCollection } from 'astro:content';

const toDateString = (date) => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
};

const maxDate = (dates) =>
	dates.reduce((latest, date) => (!latest || date > latest ? date : latest), undefined);

const escapeXml = (value) =>
	value
		.replaceAll('&', '&amp;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;');

const createUrl = ({ site, path, lastmod, priority }) => {
	const loc = new URL(path, site).toString();

	return [
		'  <url>',
		`    <loc>${escapeXml(loc)}</loc>`,
		lastmod ? `    <lastmod>${toDateString(lastmod)}</lastmod>` : '',
		priority ? `    <priority>${priority}</priority>` : '',
		'  </url>',
	]
		.filter(Boolean)
		.join('\n');
};

export async function GET(context) {
	const posts = (await getCollection('blog')).filter((post) => !post.data.draft);
	const projects = await getCollection('projects');

	const latestPostDate = maxDate(posts.map((post) => post.data.updatedDate ?? post.data.pubDate));
	const latestProjectDate = maxDate(projects.map((project) => project.data.pubDate));
	const latestSiteDate = maxDate([latestPostDate, latestProjectDate].filter(Boolean));

	const urls = [
		{ path: '/', lastmod: latestSiteDate, priority: '1.0' },
		{ path: '/projects/', lastmod: latestProjectDate, priority: '0.8' },
		{ path: '/rabbitholes/', lastmod: latestPostDate, priority: '0.8' },
		...posts.map((post) => ({
			path: `/rabbitholes/${post.id}/`,
			lastmod: post.data.updatedDate ?? post.data.pubDate,
			priority: '0.7',
		})),
	];

	const body = [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...urls.map((url) => createUrl({ ...url, site: context.site })),
		'</urlset>',
	].join('\n');

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
		},
	});
}
