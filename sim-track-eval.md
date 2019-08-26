
Obtain the macros:
```bash
mkdir sp_eval
git clone https://github.com/HaiwangYu/wct-track-eval.git
```

In wct-track-eval:
```bash
python test_gen_rays_pdsp.py 45 > rays_45.json
```

make a copy of the https://github.com/HaiwangYu/wc-learn-notes/edit/master/sim-track-eval.md
in sp_eval

In sp_eval:
```bash
jsonnet -J cfg wct-track-eval/track-eval.jsonnet -o track-eval.json && wire-cell -l stdout:info -c track-eval.json
```

Modify this part to use all collection field response:
https://github.com/WireCell/wire-cell-cfg/blob/master/pgrapher/experiment/pdsp/params.jsonnet#L159-L163


```bash
root -l wct-track-eval/TrackEval.C\(\"truth.root\",\"test.root\",\"u\",45\)
root -l wct-track-eval/TrackEval.C\(\"truth.root\",\"test.root\",\"v\",45\)
root -l wct-track-eval/TrackEval.C\(\"truth.root\",\"test.root\",\"w\",45\)
```


Hanyu's macros:
https://www.phy.bnl.gov/~weihy/protoDUNE/SP-eval/TrackEval.C
https://www.phy.bnl.gov/~weihy/protoDUNE/SP-eval/PlotLineChargeRBE.C
