import { getCurrentInstance } from 'vue';

export function useParentTree() {
  const instance = getCurrentInstance();
  const tree = [];

  let parent = instance?.parent;
  while (parent) {
    tree.push(parent.type?.name || 'Anonymous');
    parent = parent.parent;
  }

  return tree;
}

export const getImageUrl = (url?: string) => {
  if (!url) {
    return '';
  }

  const isPublicDirectory = url.startsWith('/img') || url.startsWith('img');

  if (isPublicDirectory) {
    return url;
  }

  const route = useRoute();
  const { locale } = useI18n();
  const parentTree = useParentTree();

  let folder = route.path.split('/').at(-2);

  if (parentTree.includes('Page')) {
    folder = 'pages';
  } else if (parentTree.includes('Product')) {
    folder = 'catalog';
  }

  return `${locale.value}/${folder}/${url}`
};
