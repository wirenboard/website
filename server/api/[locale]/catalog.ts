import { serverQueryContent } from '#content/server';
import { toHtml } from 'hast-util-to-html';
import { toHast } from 'mdast-util-to-hast';

export default defineEventHandler(async (event) => {
  const locale = getRouterParam(event, 'locale');

  const products = await serverQueryContent(event)
    .where({ _path: { $contains: 'catalog' }, _locale: locale })
    .find();

  return products.reduce((acc: any, product) => {
    // @ts-ignore
    const hast = toHast(product.body.children[0].children.find(item => Object.hasOwn(item.props, 'v-slot:description')));

    acc[product.article] = {
      cover: `https://wirenboard.com/_ipx/h_120&q_70&f_webp/${product.cover}`,
      description: toHtml(hast, { allowDangerousHtml: true })
    }
    return acc;
  }, {});
});
