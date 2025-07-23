import { defineTransformer } from '@nuxt/content/transformers';
import type { ParsedContent, MarkdownNode } from '@nuxt/content';

export default defineTransformer({
  name: 'image-path-transformer',
  extensions: ['.md'],
  transform(content: ParsedContent) {
    const match = content._id.match(/^content:(\w+):catalog/);
    const lang = match?.[1];

    if (lang && content.body) {
      parse(content.body, lang);
    }

    return content;
  }
});

function parse(node: MarkdownNode, lang: string) {
  if (Array.isArray(node.children)) {
    for (const child of node.children) {
      if ((child.tag === 'photo' || child.tag === 'img') && child.props?.src && !child.props.src.startsWith('/img')) {
        child.props.src = `${lang}/catalog/${child.props.src}`;
      }

      parse(child, lang);
    }
  }
}
