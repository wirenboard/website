import { serverQueryContent } from '#content/server';
import { toHtml } from 'hast-util-to-html';
import { toHast } from 'mdast-util-to-hast';

export default defineEventHandler(async (event) => {
  const locale = getRouterParam(event, 'locale');

  const products = await serverQueryContent(event)
    .where({ _path: { $contains: 'catalog' }, _locale: locale })
    .find();

  return products.reduce((acc: any, product) => {
    const node = product.body?.children?.[0]?.children?.find(
      (item: any) => item?.props && Object.hasOwn(item.props, 'v-slot:description')
    );

    if (!node) return acc;

    // @ts-ignore
    const hast = toHast(product.body.children[0].children.find(item => Object.hasOwn(item.props, 'v-slot:description')), {
      unknownHandler(state, node) {
        return {
          type: 'element',
          tagName: node.tag === 'a' ? 'span' : 'div',
          children: state.all(node)
        };
      },
    });

    acc[product.article] = {
      covers: {
        120: `https://wirenboard.com/_ipx/h_120&q_70&f_webp/${product.cover}`,
        160: `https://wirenboard.com/_ipx/h_160&q_70&f_webp/${product.cover}`,
        240: `https://wirenboard.com/_ipx/h_240&q_80&f_webp/${product.cover}`,
        320: `https://wirenboard.com/_ipx/h_320&q_80&f_webp/${product.cover}`,
        360: `https://wirenboard.com/_ipx/h_360&q_90&f_webp/${product.cover}`,
        480: `https://wirenboard.com/_ipx/h_480&q_100&f_webp/${product.cover}`,
      },
      description: toHtml(hast, { allowDangerousHtml: true })
    }
    return acc;
  }, {});
});
