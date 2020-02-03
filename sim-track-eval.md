# sim track eval

Obtain the macros:
```bash
mkdir sp_eval
git clone https://github.com/HaiwangYu/wct-track-eval.git
```

In wct-track-eval:
```bash
python test_gen_rays_pdsp.py 45 > rays_45.json
```

make a copy of the https://github.com/WireCell/wire-cell-cfg/
in sp_eval

In sp_eval:
```bash
jsonnet -J cfg track-eval.jsonnet -o track-eval.json && wire-cell -l stdout:info -c track-eval.json
```

Use the original field resp. to obtain the `test.root`

Then modify this part to use all collection field response to obtain a `truth.root`
 - https://github.com/WireCell/wire-cell-cfg/blob/master/pgrapher/experiment/pdsp/params.jsonnet#L159-L163


Extract Bias/Resolution/In-eficiency like this for the `u` plane:
```bash
root -l wct-track-eval/TrackEval.C\(\"truth.root\",\"test.root\",\"u\",45\)
```


Hanyu's macros:
 - https://www.phy.bnl.gov/~weihy/protoDUNE/SP-eval/TrackEval.C
 - https://www.phy.bnl.gov/~weihy/protoDUNE/SP-eval/PlotLineChargeRBE.C

Wenqiang's field resp:
 - https://github.com/WireCell/wire-cell-data/blob/master/garfield-1d-boundary-path-rev-dune-ALL-COLLECTION.json.bz2

Wenqiang's macro:
 - https://github.com/WireCell/wire-cell-cfg/blob/master/pgrapher/experiment/pdsp/Quickstart/test_gen_rays_pdsp.py

