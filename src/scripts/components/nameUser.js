
export default function NameUser(data, element) {
	const elementHTML = element;
	const markup = `<a href="${data.html_url}">${data.name}</a>`;
	elementHTML.innerHTML = markup;
	return data;
}

