module.exports = {
  base: '/wc-cheatsheet/',
  markdown: {
    lineNumbers: true,
    // config: md => {
    //   // use more markdown-it plugins!
    //   md.use(require('markdown-it-math'))
    // }
  },
  themeConfig: {
    repo: 'HaiwangYu/wc-cheatsheet',
    repoLabel: 'GitHub',
    editLinks: true,
    logo: "/img/logo.png",
    nav: [
        { text: 'Main',link: '/' },
    ],
    sidebar: {
      '/': [
         'build-libtorch',
         'docker-quick-start',
         'gdb',
         'git',
         'hdf5',
         'install-cvmfs-singularity',
         'install-root',
         'install-wirecell-sigularity',
         'lar-cmd',
         'larsoft-update-with-new-release',
         'links',
         'make-ups',
         'rootlogon',
         'sim-track-eval',
         'singularity-with-cuda',
         'using-vscode',
      ]
    },
    sidebarDepth: 1,
    lastUpdated: 'Last Updated'
  },
  title: "wc-cheatsheet",
  description: "Welcome to wc-cheatsheet",
}
