    (function(){
        var images = ["https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/11905748_896382597064375_4301602500276044276_n.jpg?oh=a6971e36ff9069169d4a14505f1943f4&oe=566E3055","https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/11900036_896382140397754_6767071458032147939_n.jpg?oh=45f398447e6d91fb6de62594983b0aef&oe=567CA88D","https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/11924970_896382113731090_6896373537010431908_n.jpg?oh=b186c1cad2bbf9b5180f6f86be360012&oe=567EE8F8","https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/11891228_896382737064361_7792253376266982571_n.jpg?oh=2881b0d315be2692e0e773876e95b7fd&oe=567BC0E4","https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/11855737_896382903731011_4081762411709524004_n.jpg?oh=f722487c909777ceb39d40321b933f30&oe=567723A2","https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/11892068_896383350397633_6174310867782021745_n.jpg?oh=28732c7fea04ebbda04b718d040a9580&oe=567E95F1"];
        for(i in images){
         $($(".col-lg-4")[i]).prepend("<img src='"+images[i]+"' class='img-responsive'/>");   
        }
    })();