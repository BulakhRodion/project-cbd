<template>
  <component :is="getIcon"></component>
</template>
<script>
const getName = (name) => `icon-${name}`;
export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
    },
  },
  components: {
    [getName('facebook')]: () => import('../icons/IconFacebook.vue'),
    [getName('twitter')]: () => import('../icons/IconTwitter.vue'),
    [getName('youtube')]: () => import('../icons/IconYoutube.vue'),
  },
  computed: {
    getIcon() {
      return getName(this.icon);
    },
  },
};
</script>