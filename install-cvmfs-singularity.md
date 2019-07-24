# Install singularity and cvmfs on Ubuntu 18.04



##install singularity following [this](https://github.com/WireCell/wire-cell-singularity/blob/master/singularity.org)

 ## install cvmfs on Ubuntu

**tested on Ubuntu 18.04**

### Add apt repository 
```bash
sudo apt-get install lsb-release
wget https://ecsft.cern.ch/dist/cvmfs/cvmfs-release/cvmfs-release-latest_all.deb
sudo dpkg -i cvmfs-release-latest_all.deb
rm -f cvmfs-release-latest_all.deb
sudo apt-get update
```

### Install cvmfs
```bash
sudo apt-get install cvmfs cvmfs-config-default
```

### Config
Configure cvmfs by editing '/etc/cvmfs/default.local'

```bash
CVMFS_REPOSITORIES=larsoft.opensciencegrid.org,uboone.opensciencegrid.org,dune.opensciencegrid.org
CVMFS_HTTP_PROXY=DIRECT
CVMFS_QUOTA_LIMIT=10000
```

### appending this line to '/etc/auto.master'
```bash
/cvmfs /etc/auto.cvmfs
```

### Restart autofs
```bash
sudo service autofs restart
```