var blb = bl$("blPlx");
var bld = bl$("id_div_4_plx");
bld.innerHTML = "<a href='..'>[..]</a>";
blb.innerHTML = "[blPlx_v0.114]";
blb.onclick = function(){
    if(!this.md){
        this.md = blo0.blMD("blMD","blMD",550,50,555,100,blGrey[0]);
        this.oPlx = CPlx(this.md);
    }

    _on_off_div(this,this.md);
    var b = this;
    b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
}

function CPlx (p){
    var _v = "CPlx v0.11";
    var audios = document.getElementsByTagName("audio");
    var _player = audios[0];
    var n = 0;
    var _d = blo0.blDiv(p,p.id+"_d","_d :" ,blGrey[1]);
    var tb = blo0.blDiv(_d,_d.id+"tb","tb :" ,blGrey[2]);
    var mv = blo0.blDiv(_d,"id_div_4_mv","mv :" ,blGrey[3]);
    var mm = blo0.blDiv(_d,"id_div_4_mm","mm :" ,blGrey[3]); 
    var mt = blo0.blDiv(_d,_d.id+"mt","mt:" ,blGrey[4]); 
    mt.ta = blo0.blTextarea(mt,mt.id+"ta","ta",blGrey[0]);
    mt.ta.style.width= 100 + "%";
    mt.ta.style.float = "left";

    tb.btnPlay = blo0.blBtn(tb,tb.id+"btnPlay","play",blGrey[3]);
    tb.btnPlay.onclick = function(){
        if(n==0){
            n=1;
            this.innerHTML = "stop"; 
            _player.play();
        }
        else if(n==1){
            n=0;
            this.innerHTML = "play";
            _player.pause();
            _player.currentTime = 0;
        }
    }
    
    tb.btnMark = blo0.blBtn(tb,tb.id+"btnMark","mark",blGrey[3]);
    tb.btnMark.onclick = function(_mv){
        _mv.markList = [];
        return function(){
            var n = _mv.markList.length;
            var b = blo0.blBtn(_mv,_mv.id+n,n+1,blGrey[1]);
            b.style.float="left";
            b.t = _player.currentTime;
            b.txt = "...";
            b.n = n;
            _mv.curSel = n;
            b.onclick = function(_n,_this){
                return function(){ 
                    mm.innerHTML = n + ": t =" + _this.t + ":_this.n="+ _this.n + ": txt= " + _this.txt;
                    _player.currentTime = _this.t;
                    mt.ta.value = _this.txt;
                    
                    for(i in _mv.markList){
                        _mv.markList[i].style.backgroundColor = "brown";
                        if( _this.n==i){
                            _mv.markList[i].style.backgroundColor = "yellow";
                            _mv.curSel = i;                            
                        }                        
                    }
                }
            }(n,b);
            _mv.markList.push(b);
        } 
    }(mv);

    
    mt.btnSetText = blo0.blBtn(mt,mt.id+"btnSetText","SetText",blGrey[3]);
    mt.btnSetText.onclick = function(){
        mv.markList[mv.curSel].txt = mt.ta.value; 
    }

    
    tb.btnLoadT1 = blo0.blBtn(tb,tb.id+"btnLoadT1","t1",blGrey[3]);
    tb.btnLoadT1.onclick = function(){
        mt.ta.value = JSON.stringify(t1);
    }
    tb.btnMakeT1 = blo0.blBtn(tb,tb.id+"btnMakeT1","make-t1",blGrey[3]);
    tb.btnMakeT1.onclick = function(){
        t1 = {};
        t1.listT = [];
        t1.listTxt = [];
        for(i in mv.markList){
            t1.listT.push(mv.markList[i].t);          
            t1.listTxt.push(mv.markList[i].txt);               
        }
    }


}