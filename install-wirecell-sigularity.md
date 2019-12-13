# Install wire-cell with singularity container

This is a markdown version of Wenqiang's google doc [here](https://docs.google.com/document/d/1cXfifmLUx6UroHm66uJRzG1PEYJ7jLFNRA1LDZ7y5ls/edit), with some updates that works on July 10th 2019 for the following versions:

- larsoft version: `v08_24_00`
- larwirecell version: `v08_05_08`
- wirecell: `v0_12_3`
- Check [this](https://cdcvs.fnal.gov/redmine/projects/larwirecell/repository) for the latest version

## A) singularity and cvmfs

Install singlularity and cvmfs following [this](https://github.com/WireCell/wire-cell-singularity).

## B) wcdo

This step-by-setp guide showed an example of using wcdo.  For more, refer [this](https://github.com/WireCell/wire-cell-singularity/blob/master/wcdo.org).

### B.0) Download/copy the following `wcdo.sh` script somewhere in your `$PATH` and make sure it is executable.

- [wcdo.sh](https://raw.githubusercontent.com/WireCell/wire-cell-singularity/master/wcdo.sh)

### B.1) Obain and configure a singularity image

```bash
mkdir -p ~/wcdo/example
cd ~/wcdo/example
wcdo.sh init
wcdo.sh wct
wcdo.sh get-image sl7krb
wcdo.sh make-project myproj sl7krb
vim wcdo-local-myproj.rc
wcdo_mrb_project_name="larsoft"
wcdo_mrb_project_version="v08_24_00"
wcdo_mrb_project_quals="e17:prof"
./wcdo-myproj.sh
```

### B.2) install ups and wcdo
**in the singularity container**

```bash
source /cvmfs/dune.opensciencegrid.org/products/dune/setup_dune.sh
path-prepend $wcdo_ups_products PRODUCTS
wcdo-mrb-init # call mrb newDev if localsetup doesn't exist
```
output
```bash
IMPORTANT: You must type
    source /wcdo/src/mrb/localProducts_larsoft_v08_24_00_e17_prof/setup
NOW and whenever you log in
```

chekcout a feature branch

```bash
wcdo-mrb-add-source larwirecell v080508 v08_05_08
```
output
```bash
Summary of actions:
- A new branch 'feature/v080508' was created, based on 'v080508-branch'
- You are now on branch 'feature/v080508'

Now, start committing on your feature. When done, use:

     git flow feature finish v080508
```

**build wirecell**

```bash
wcdo-ups-declare wirecell wctdev # generate table file according to current dependency tree
setup wirecell wctdev -q e17:prof

wcdo-ups-wct-configure-source
./wcb -p --notests install
```

output
```bash
Checking for program 'rootcint'          : /cvmfs/larsoft.opensciencegrid.org/products/root/v6_12_06a/Linux64bit+3.10-2.17-e17-prof/bin/rootcint 
Checking for program 'rlibmap'           : not found 
Checking for header Rtypes.h             : yes 
Checking for program 'dpkg-architecture' : not found 
Checking boost includes                  : 1.66.0 
...
Waf: Entering directory `/wcdo/src/wct/build'
Building: apps, cfg, gen, iface, img, pgraph, ress, root, sigproc, sio, util
[206/206][100%][-][======================>][13m28.686s]
Waf: Leaving directory `/wcdo/src/wct/build'
'install' finished successfully (13m28.745s)
```

```bash
setup wirecell wctdev -q e17:prof
wcdo-wirecell-path default
```
**Build larwirecell**

```bash
vim /wcdo/src/mrb/srcs/larwirecell/ups/product_deps
(change: wirecell v0_10_5 ==> wirecell wctdev)

mrbsetenv
mrb i
mrbslp
```





### B.3) Test: you should see similar results

**test 1**

```bash
ups active | grep wirecell
```
output

```bash
larwirecell v08_05_08 -f Linux64bit+4.18-2.17 -q e17:prof -z /wcdo/src/mrb/localProducts_larsoft_v08_24_00_e17_prof
wirecell wctdev -f Linux64bit+4.18-2.17-sl7-6 -q e17:prof -z /wcdo/lib/ups
```



**test 2**

```bash
ups list -aK+ wirecell | tail
```

output

```bash
"wirecell" "v0_12_3" "Linux64bit+2.6-2.12" "c2:debug" "" 
"wirecell" "v0_12_3" "Darwin64bit+18" "c2:debug" "" 
"wirecell" "v0_12_3" "Linux64bit+2.6-2.12" "e17:prof" "" 
"wirecell" "v0_12_3" "Linux64bit+2.6-2.12" "debug:e17" "" 
"wirecell" "v0_12_3" "Darwin64bit+17" "c2:prof" "" 
"wirecell" "v0_12_3" "Darwin64bit+17" "c2:debug" "" 
"wirecell" "v0_12_3" "Linux64bit+3.10-2.17" "debug:e17:py3" "" 
"wirecell" "v0_12_3" "Linux64bit+3.10-2.17" "e17:prof:py3" "" 
"wirecell" "v0_12_3" "Linux64bit+3.10-2.17" "c2:prof:py3" "" 
"wirecell" "v0_12_3" "Linux64bit+3.10-2.17" "c2:debug:py3" ""
```

So far, you should have a workable singularity with wirecell + larsoft.

### examples of wcdo-local-myproj.rc

**Haiwang's**

```bash
#!/bin/bash

# This is a local wcdo rc file for project myproj.
# It was initally generated but is recomended for customizing by you, dear user.
# It is included at the end of the main RC files.
    
# These are optional but required if wcdo-mrb-* commands are to be used.
wcdo_mrb_project_name="larsoft"
wcdo_mrb_project_version="v08_24_00"
wcdo_mrb_project_quals="e17:prof"

# Additional variables may be usefully set since this file was 
# first generated.  

# It is perhaps useful to end this with some command to be called 
# on each entry to the contaner.
# source /cvmfs/larsoft.opensciencegrid.org/products/setup

source /cvmfs/dune.opensciencegrid.org/products/dune/setup_dune.sh
#setup dunetpc v08_24_00 -q e17:prof
path-prepend $wcdo_ups_products PRODUCTS
wcdo-mrb-init
wcdo-ups-init

setup wirecell wctdev -q e17:prof
export WIRECELL_PATH=/wcdo/src/wct/cfg:/wcdo/share/wirecell/data
#optional: wcdo-wirecell-path default
echo WIRECELL_PATH=$WIRECELL_PATH

mrbsetenv
mrbslp
export FHICL_FILE_PATH=$WIRECELL_PATH:$FHICL_FILE_PATH

# personalize
bind '"\e[A":history-search-backward' #PageUp
bind '"\e[B":history-search-forward' #PageDown
set autolist
set autoexpand
export PS1='[s]$(pwd)\n$'
alias ls='ls --color=auto'
alias ll='ls -lh'
alias vi='vim'
```

**Wenqiang's**

```bash
#!/bin/bash

# This is a local wcdo rc file for project myproj.
# It was initally generated but is recomended for customizing by you, dear user.
# It is included at the end of the main RC files.
    
# These are optional but required if wcdo-mrb-* commands are to be used.
wcdo_mrb_project_name="larsoft"
wcdo_mrb_project_version="v07_13_00"
wcdo_mrb_project_quals="e17:prof"

# Additional variables may be usefully set since this file was
# first generated.  

# It is perhaps useful to end this with some command to be called 
# on each entry to the contaner.
# source /cvmfs/larsoft.opensciencegrid.org/products/setup
source /cvmfs/dune.opensciencegrid.org/products/dune/setup_dune.sh
setup dunetpc v07_13_00 -q e17:prof
path-prepend $wcdo_ups_products PRODUCTS
wcdo-mrb-init
wcdo-ups-init

setup wirecell wctdev -q e17:prof
export WIRECELL_PATH=/wcdo/src/wct/cfg:/wcdo/share/wirecell/data
#optional: wcdo-wirecell-path default
echo WIRECELL_PATH=$WIRECELL_PATH

mrbsetenv
mrbslp
export FHICL_FILE_PATH=$WIRECELL_PATH:$FHICL_FILE_PATH
```

Now please enjoy it: ./wcdo-myproj.sh
