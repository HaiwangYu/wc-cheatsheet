# larsoft update with new release

Refer: [Using a new release with your existing source code directory](https://cdcvs.fnal.gov/redmine/projects/larsoft/wiki/UpdatingToNewRelease#Using-a-new-release-with-your-existing-source-code-directory)

Add configure area
```bash
mrb newDev -p -v $wcdo_mrb_project_version -q $wcdo_mrb_project_quals
source localProducts_larsoft_${wcdo_mrb_project_version}_e17_prof/setup
```

e.g.
```bash
mrb newDev -p -v v08_32_00 -q e17:prof # -p: just make the products area (checks that src, build are already there)
source localProducts_larsoft_v08_32_00_e17_prof/setup
```

Deal with source, e.g. pull off new branches, merger conflicts, etc.
```bash
git flow feature start yuhw_dev master
git checkout tags/v08_09_03 -b yuhw_v08_09_03
# modify source e.g. the product_deps file
```

Re-build
Check if these variables are set:
`$MRB_BUILDDIR`, `$MRB_INSTALL`

```bash
mrb z # clean build area
mrbsetenv
mrb i -j8 # re-build
```
