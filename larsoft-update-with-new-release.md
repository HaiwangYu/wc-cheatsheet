
Refer: [Using a new release with your existing source code directory](https://cdcvs.fnal.gov/redmine/projects/larsoft/wiki/UpdatingToNewRelease#Using-a-new-release-with-your-existing-source-code-directory)

Add configure area
```bash
mrb newDev -p -v v08_32_00 -q e17:prof # -p: just make the products area (checks that src, build are already there)
source localProducts_larsoft_v08_32_00_e17_prof/setup
```

Deal with source, e.g. pull off new branches, merger conflicts, etc.
```bash
git flow feature start yuhw_dev master
# modify source e.g. the product_deps file
```

Re-build

```bash
mrb z # clean build area
mrbsetenv
mrb i -j8 # re-build
```
