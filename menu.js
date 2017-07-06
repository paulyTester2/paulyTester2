    function traditionalPizzaToggle() {
        var x = document.getElementById('traditionalP');
        var y = document.getElementById('tradCheese');
        var z = document.getElementById('tradPepp');
        if (x.style.display === 'none' &&
            y.style.display === 'none' &&
            z.style.display === 'none' ) {
          x.style.display = 'block';
          y.style.display = 'block';
          z.style.display = 'block';
        } else {
          x.style.display = 'none';
          y.style.display = 'none';
          z.style.display = 'none';
        }
    }

    function paulysChoiceToggle() {
        var x = document.getElementById('size');
        var a = document.getElementById('pWalnuts');
        var b = document.getElementById('tko');
        var c = document.getElementById('spinageTroi');
        var d = document.getElementById('mikeyShow');
        var e = document.getElementById('bPie');
        var f = document.getElementById('hawaii');
        var g = document.getElementById('xmasPie');
        var h = document.getElementById('whiteCaps');
        var i = document.getElementById('whiteMeat');
        if (x.style.display === 'none' &&
            a.style.display === 'none' &&
            b.style.display === 'none' &&
            c.style.display === 'none' &&
            d.style.display === 'none' &&
            e.style.display === 'none' &&
            f.style.display === 'none' &&
            g.style.display === 'none' &&
            h.style.display === 'none' &&
            i.style.display === 'none' ) {
          x.style.display = 'block';
          a.style.display = 'block';
          b.style.display = 'block';
          c.style.display = 'block';
          d.style.display = 'block';
          e.style.display = 'block';
          f.style.display = 'block';
          g.style.display = 'block';
          h.style.display = 'block';
          i.style.display = 'block';
        } else {
          x.style.display = 'none';
          a.style.display = 'none';
          b.style.display = 'none';
          c.style.display = 'none';
          d.style.display = 'none';
          e.style.display = 'none';
          f.style.display = 'none';
          g.style.display = 'none';
          h.style.display = 'none';
          i.style.display = 'none';
        }
    }

    function chickenPiesToggle() {
        var a = document.getElementById('cSize');
        var b = document.getElementById('petsy');
        var c = document.getElementById('bbq');
        var d = document.getElementById('buffalo');
        var e = document.getElementById('ranch');
        var f = document.getElementById('chipotle');
        if (a.style.display === 'none' &&
            b.style.display === 'none' &&
            c.style.display === 'none' &&
            d.style.display === 'none' &&
            e.style.display === 'none' &&
            f.style.display === 'none' ) {
          a.style.display = 'block';
          b.style.display = 'block';
          c.style.display = 'block';
          d.style.display = 'block';
          e.style.display = 'block';
          f.style.display = 'block';
        } else {
          a.style.display = 'none';
          b.style.display = 'none';
          c.style.display = 'none';
          d.style.display = 'none';
          e.style.display = 'none';
          f.style.display = 'none';
        }
    }

    function healthyToggle() {
        var a = document.getElementById('hSize');
        var b = document.getElementById('veggie');
        var c = document.getElementById('italian');
        var d = document.getElementById('monaVi');
        var e = document.getElementById('margarita');
        var f = document.getElementById('vegan');
        if (a.style.display === 'none' &&
            b.style.display === 'none' &&
            c.style.display === 'none' &&
            d.style.display === 'none' &&
            e.style.display === 'none' &&
            f.style.display === 'none' ) {
          a.style.display = 'block';
          b.style.display = 'block';
          c.style.display = 'block';
          d.style.display = 'block';
          e.style.display = 'block';
          f.style.display = 'block';
        } else {
          a.style.display = 'none';
          b.style.display = 'none';
          c.style.display = 'none';
          d.style.display = 'none';
          e.style.display = 'none';
          f.style.display = 'none';
        }
    }
    
    function pizzaMenu(){
        $(".nav.nav-tabs.nav-justified li").removeClass("active");
        $("#pizza").addClass("active");
        var text1 = document.getElementById('menuTitleOne');      
        var img1 = document.getElementById('imageOne');
        var a = document.getElementById('traditionalP');
        var b = document.getElementById('tradCheese');
        var c = document.getElementById('tradPepp');
        
        var img2 = document.getElementById('imageTwo');
        var d = document.getElementById('size');
        var e = document.getElementById('pWalnuts');
        var f = document.getElementById('tko');
        var g = document.getElementById('spinageTroi');
        var h = document.getElementById('mikeyShow');
        var i = document.getElementById('bPie');
        var j = document.getElementById('hawaii');
        var k = document.getElementById('xmasPie');
        var m = document.getElementById('whiteCaps');
        var n = document.getElementById('whiteMeat');

        var img3 = document.getElementById('imageThree');
        var l = document.getElementById('cSize');
        var o = document.getElementById('petsy');
        var p = document.getElementById('bbq');
        var q = document.getElementById('buffalo');
        var r = document.getElementById('ranch');
        var s = document.getElementById('chipotle');

        var img4 = document.getElementById('imageFour');
        var t = document.getElementById('hSize');
        var u = document.getElementById('veggie');
        var v = document.getElementById('italian');
        var w = document.getElementById('monaVi');
        var x = document.getElementById('margarita');
        var y = document.getElementById('vegan');

        var text2 = document.getElementById('menuTitleTwo');
        var img5 = document.getElementById('imageFive');
        var z = document.getElementById('calzone');
        var aa = document.getElementById('stromboli');
        var ab = document.getElementById('sausageRoll');
        var ac = document.getElementById('meatballRoll');
        var ad = document.getElementById('spinachRoll');

        var text3 = document.getElementById('menuTitleThree');
        var img6 = document.getElementById('imageSix');
        var ae = document.getElementById('italianSub');
        var af = document.getElementById('stromboliSan');
        var ag = document.getElementById('parm');

        var text4 = document.getElementById('menuTitleFour');
        var img7 = document.getElementById('imageSeven');
        var ah = document.getElementById('garden');
        var ai = document.getElementById('caesar');
        var aj = document.getElementById('greek');
        var ak = document.getElementById('antipasta');
        var am = document.getElementById('addChicken');
        var an = document.getElementById('sideDressing');
        var al = document.getElementById('sizeSalad');

        var text5 = document.getElementById('menuTitleFive');
        var img8 = document.getElementById('imageEight');
        var ao = document.getElementById('sizeApp');
        var ap = document.getElementById('meatballsApp');
        var aq = document.getElementById('gBread');
        var ar = document.getElementById('gBigBread');
        var as = document.getElementById('cheeseApp');

        var text6 = document.getElementById('menuTitleSix');
        var img9 = document.getElementById('imageNine');
        var at = document.getElementById('nycc');
        var au = document.getElementById('fc');

        var text7 = document.getElementById('menuTitleSeven');
        var img10 = document.getElementById('imageTen');
        var av = document.getElementById('fountain');
        var aw = document.getElementById('twoL');
        var ax = document.getElementById('domesticBeer');
        var ay = document.getElementById('importedBeer');
        var az = document.getElementById('localCraft');
        var ba = document.getElementById('comboBeer');
        var bb = document.getElementById('sodaCan');

        var text8 = document.getElementById('menuTitleEight');
        var img11 = document.getElementById('imageEleven');
        var bc = document.getElementById('slice');
        var bd = document.getElementById('twoSlice');
        var be = document.getElementById('oneSlice');
        var bf = document.getElementById('threeSlice');
        var bg = document.getElementById('eightSlice');

        text1.style.display = 'block';
        img1.style.display = 'block';
        a.style.display = 'block';
        b.style.display = 'block';
        c.style.display = 'block';

        img2.style.display = 'block';
        d.style.display = 'block';
        e.style.display = 'block';
        f.style.display = 'block';
        g.style.display = 'block';
        h.style.display = 'block';
        i.style.display = 'block';
        j.style.display = 'block';
        k.style.display = 'block';
        m.style.display = 'block';
        n.style.display = 'block';

        img3.style.display = 'block';
        l.style.display = 'block';
        o.style.display = 'block';
        p.style.display = 'block';
        q.style.display = 'block';
        r.style.display = 'block';
        s.style.display = 'block';

        img4.style.display = 'block';
        t.style.display = 'block';
        u.style.display = 'block';
        v.style.display = 'block';
        w.style.display = 'block';
        x.style.display = 'block';
        y.style.display = 'block';

        text2.style.display = 'none';
        img5.style.display = 'none';
        z.style.display = 'none';
        aa.style.display = 'none';
        ab.style.display = 'none';
        ac.style.display = 'none';
        ad.style.display = 'none';
        
        text3.style.display = 'none';
        img6.style.display = 'none';
        ae.style.display = 'none';
        af.style.display = 'none';
        ag.style.display = 'none';

        text4.style.display = 'none';
        img7.style.display = 'none';
        ah.style.display = 'none';
        ai.style.display = 'none';
        aj.style.display = 'none';
        ak.style.display = 'none';
        am.style.display = 'none';
        an.style.display = 'none';
        al.style.display = 'none';

        text5.style.display = 'none';
        img8.style.display = 'none';
        ao.style.display = 'none';
        ap.style.display = 'none';
        aq.style.display = 'none';
        ar.style.display = 'none';
        as.style.display = 'none';
        
        text6.style.display = 'none';
        img9.style.display = 'none';
        at.style.display = 'none';
        au.style.display = 'none';

        text7.style.display = 'none';
        img10.style.display = 'none';
        av.style.display = 'none';
        aw.style.display = 'none';
        ax.style.display = 'none';
        ay.style.display = 'none';
        az.style.display = 'none';
        ba.style.display = 'none';
        bb.style.display = 'none';

        text8.style.display = 'none';
        img11.style.display = 'none';
        bc.style.display = 'none';
        bd.style.display = 'none';
        be.style.display = 'none';
        bf.style.display = 'none';        
        bg.style.display = 'none';

    }

    function rollsMenu(){
        $(".nav.nav-tabs.nav-justified li").removeClass("active");
        $("#rolls").addClass("active");
        var text1 = document.getElementById('menuTitleOne');
        var img1 = document.getElementById('imageOne');
        var a = document.getElementById('traditionalP');
        var b = document.getElementById('tradCheese');
        var c = document.getElementById('tradPepp');
        
        var img2 = document.getElementById('imageTwo');
        var d = document.getElementById('size');
        var e = document.getElementById('pWalnuts');
        var f = document.getElementById('tko');
        var g = document.getElementById('spinageTroi');
        var h = document.getElementById('mikeyShow');
        var i = document.getElementById('bPie');
        var j = document.getElementById('hawaii');
        var k = document.getElementById('xmasPie');
        var m = document.getElementById('whiteCaps');
        var n = document.getElementById('whiteMeat');

        var img3 = document.getElementById('imageThree');
        var l = document.getElementById('cSize');
        var o = document.getElementById('petsy');
        var p = document.getElementById('bbq');
        var q = document.getElementById('buffalo');
        var r = document.getElementById('ranch');
        var s = document.getElementById('chipotle');

        var img4 = document.getElementById('imageFour');
        var t = document.getElementById('hSize');
        var u = document.getElementById('veggie');
        var v = document.getElementById('italian');
        var w = document.getElementById('monaVi');
        var x = document.getElementById('margarita');
        var y = document.getElementById('vegan');

        var text2 = document.getElementById('menuTitleTwo');
        var img5 = document.getElementById('imageFive');
        var z = document.getElementById('calzone');
        var aa = document.getElementById('stromboli');
        var ab = document.getElementById('sausageRoll');
        var ac = document.getElementById('meatballRoll');
        var ad = document.getElementById('spinachRoll');

        var text3 = document.getElementById('menuTitleThree');
        var img6 = document.getElementById('imageSix');
        var ae = document.getElementById('italianSub');
        var af = document.getElementById('stromboliSan');
        var ag = document.getElementById('parm');

        var text4 = document.getElementById('menuTitleFour');
        var img7 = document.getElementById('imageSeven');
        var ah = document.getElementById('garden');
        var ai = document.getElementById('caesar');
        var aj = document.getElementById('greek');
        var ak = document.getElementById('antipasta');
        var am = document.getElementById('addChicken');
        var an = document.getElementById('sideDressing');
        var al = document.getElementById('sizeSalad');

        var text5 = document.getElementById('menuTitleFive');
        var img8 = document.getElementById('imageEight');
        var ao = document.getElementById('sizeApp');
        var ap = document.getElementById('meatballsApp');
        var aq = document.getElementById('gBread');
        var ar = document.getElementById('gBigBread');
        var as = document.getElementById('cheeseApp');

        var text6 = document.getElementById('menuTitleSix');
        var img9 = document.getElementById('imageNine');
        var at = document.getElementById('nycc');
        var au = document.getElementById('fc');

        var text7 = document.getElementById('menuTitleSeven');
        var img10 = document.getElementById('imageTen');
        var av = document.getElementById('fountain');
        var aw = document.getElementById('twoL');
        var ax = document.getElementById('domesticBeer');
        var ay = document.getElementById('importedBeer');
        var az = document.getElementById('localCraft');
        var ba = document.getElementById('comboBeer');
        var bb = document.getElementById('sodaCan');

        var text8 = document.getElementById('menuTitleEight');
        var img11 = document.getElementById('imageEleven');
        var bc = document.getElementById('slice');
        var bd = document.getElementById('twoSlice');
        var be = document.getElementById('oneSlice');
        var bf = document.getElementById('threeSlice');
        var bg = document.getElementById('eightSlice');

        text1.style.display = 'none';
        img1.style.display = 'none';
        a.style.display = 'none';
        b.style.display = 'none';
        c.style.display = 'none';

        img2.style.display = 'none';
        d.style.display = 'none';
        e.style.display = 'none';
        f.style.display = 'none';
        g.style.display = 'none';
        h.style.display = 'none';
        i.style.display = 'none';
        j.style.display = 'none';
        k.style.display = 'none';
        m.style.display = 'none';
        n.style.display = 'none';

        img3.style.display = 'none';
        l.style.display = 'none';
        o.style.display = 'none';
        p.style.display = 'none';
        q.style.display = 'none';
        r.style.display = 'none';
        s.style.display = 'none';

        img4.style.display = 'none';
        t.style.display = 'none';
        u.style.display = 'none';
        v.style.display = 'none';
        w.style.display = 'none';
        x.style.display = 'none';
        y.style.display = 'none';

        text2.style.display = 'block';
        img5.style.display = 'block';
        z.style.display = 'block';
        aa.style.display = 'block';
        ab.style.display = 'block';
        ac.style.display = 'block';
        ad.style.display = 'block';

        text3.style.display = 'none';        
        img6.style.display = 'none';
        ae.style.display = 'none';
        af.style.display = 'none';
        ag.style.display = 'none';

        text4.style.display = 'none';
        img7.style.display = 'none';
        ah.style.display = 'none';
        ai.style.display = 'none';
        aj.style.display = 'none';
        ak.style.display = 'none';
        am.style.display = 'none';
        an.style.display = 'none';
        al.style.display = 'none';

        text5.style.display = 'none';
        img8.style.display = 'none';
        ao.style.display = 'none';
        ap.style.display = 'none';
        aq.style.display = 'none';
        ar.style.display = 'none';
        as.style.display = 'none';
        
        text6.style.display = 'none';
        img9.style.display = 'none';
        at.style.display = 'none';
        au.style.display = 'none';
        
        text7.style.display = 'none';
        img10.style.display = 'none';
        av.style.display = 'none';
        aw.style.display = 'none';
        ax.style.display = 'none';
        ay.style.display = 'none';
        az.style.display = 'none';
        ba.style.display = 'none';
        bb.style.display = 'none';

        text8.style.display = 'none';
        img11.style.display = 'none';
        bc.style.display = 'none';
        bd.style.display = 'none';
        be.style.display = 'none';
        bf.style.display = 'none';        
        bg.style.display = 'none';

    }

    function sandwichesMenu(){
      $(".nav.nav-tabs.nav-justified li").removeClass("active");
      $("#sandwiches").addClass("active");
      var text1 = document.getElementById('menuTitleOne');
      var text2 = document.getElementById('menuTitleTwo');
      var text3 = document.getElementById('menuTitleThree');
      var text4 = document.getElementById('menuTitleFour');
      var text5 = document.getElementById('menuTitleFive');
      var text6 = document.getElementById('menuTitleSix');
      var text7 = document.getElementById('menuTitleSeven');
      var text8 = document.getElementById('menuTitleEight');

        var img1 = document.getElementById('imageOne');
        var a = document.getElementById('traditionalP');
        var b = document.getElementById('tradCheese');
        var c = document.getElementById('tradPepp');
        
        var img2 = document.getElementById('imageTwo');
        var d = document.getElementById('size');
        var e = document.getElementById('pWalnuts');
        var f = document.getElementById('tko');
        var g = document.getElementById('spinageTroi');
        var h = document.getElementById('mikeyShow');
        var i = document.getElementById('bPie');
        var j = document.getElementById('hawaii');
        var k = document.getElementById('xmasPie');
        var m = document.getElementById('whiteCaps');
        var n = document.getElementById('whiteMeat');

        var img3 = document.getElementById('imageThree');
        var l = document.getElementById('cSize');
        var o = document.getElementById('petsy');
        var p = document.getElementById('bbq');
        var q = document.getElementById('buffalo');
        var r = document.getElementById('ranch');
        var s = document.getElementById('chipotle');

        var img4 = document.getElementById('imageFour');
        var t = document.getElementById('hSize');
        var u = document.getElementById('veggie');
        var v = document.getElementById('italian');
        var w = document.getElementById('monaVi');
        var x = document.getElementById('margarita');
        var y = document.getElementById('vegan');

        var img5 = document.getElementById('imageFive');
        var z = document.getElementById('calzone');
        var aa = document.getElementById('stromboli');
        var ab = document.getElementById('sausageRoll');
        var ac = document.getElementById('meatballRoll');
        var ad = document.getElementById('spinachRoll');

        var img6 = document.getElementById('imageSix');
        var ae = document.getElementById('italianSub');
        var af = document.getElementById('stromboliSan');
        var ag = document.getElementById('parm');

        var img7 = document.getElementById('imageSeven');
        var ah = document.getElementById('garden');
        var ai = document.getElementById('caesar');
        var aj = document.getElementById('greek');
        var ak = document.getElementById('antipasta');
        var am = document.getElementById('addChicken');
        var an = document.getElementById('sideDressing');
        var al = document.getElementById('sizeSalad');

        var img8 = document.getElementById('imageEight');
        var ao = document.getElementById('sizeApp');
        var ap = document.getElementById('meatballsApp');
        var aq = document.getElementById('gBread');
        var ar = document.getElementById('gBigBread');
        var as = document.getElementById('cheeseApp');

        var img9 = document.getElementById('imageNine');
        var at = document.getElementById('nycc');
        var au = document.getElementById('fc');

        var img10 = document.getElementById('imageTen');
        var av = document.getElementById('fountain');
        var aw = document.getElementById('twoL');
        var ax = document.getElementById('domesticBeer');
        var ay = document.getElementById('importedBeer');
        var az = document.getElementById('localCraft');
        var ba = document.getElementById('comboBeer');
        var bb = document.getElementById('sodaCan');

        var img11 = document.getElementById('imageEleven');
        var bc = document.getElementById('slice');
        var bd = document.getElementById('twoSlice');
        var be = document.getElementById('oneSlice');
        var bf = document.getElementById('threeSlice');
        var bg = document.getElementById('eightSlice');

        text1.style.display = 'none';
        text2.style.display = 'none';
        text3.style.display = 'block';
        text4.style.display = 'none';
        text5.style.display = 'none';
        text6.style.display = 'none';
        text7.style.display = 'none';
        text8.style.display = 'none';

        img1.style.display = 'none';
        a.style.display = 'none';
        b.style.display = 'none';
        c.style.display = 'none';

        img2.style.display = 'none';
        d.style.display = 'none';
        e.style.display = 'none';
        f.style.display = 'none';
        g.style.display = 'none';
        h.style.display = 'none';
        i.style.display = 'none';
        j.style.display = 'none';
        k.style.display = 'none';
        m.style.display = 'none';
        n.style.display = 'none';

        img3.style.display = 'none';
        l.style.display = 'none';
        o.style.display = 'none';
        p.style.display = 'none';
        q.style.display = 'none';
        r.style.display = 'none';
        s.style.display = 'none';

        img4.style.display = 'none';
        t.style.display = 'none';
        u.style.display = 'none';
        v.style.display = 'none';
        w.style.display = 'none';
        x.style.display = 'none';
        y.style.display = 'none';

        img5.style.display = 'none';
        z.style.display = 'none';
        aa.style.display = 'none';
        ab.style.display = 'none';
        ac.style.display = 'none';
        ad.style.display = 'none';
        
        img6.style.display = 'block';
        ae.style.display = 'block';
        af.style.display = 'block';
        ag.style.display = 'block';

        img7.style.display = 'none';
        ah.style.display = 'none';
        ai.style.display = 'none';
        aj.style.display = 'none';
        ak.style.display = 'none';
        am.style.display = 'none';
        an.style.display = 'none';
        al.style.display = 'none';

        img8.style.display = 'none';
        ao.style.display = 'none';
        ap.style.display = 'none';
        aq.style.display = 'none';
        ar.style.display = 'none';
        as.style.display = 'none';
        
        img9.style.display = 'none';
        at.style.display = 'none';
        au.style.display = 'none';

        img10.style.display = 'none';
        av.style.display = 'none';
        aw.style.display = 'none';
        ax.style.display = 'none';
        ay.style.display = 'none';
        az.style.display = 'none';
        ba.style.display = 'none';
        bb.style.display = 'none';

        img11.style.display = 'none';
        bc.style.display = 'none';
        bd.style.display = 'none';
        be.style.display = 'none';
        bf.style.display = 'none';        
        bg.style.display = 'none';

    }

    function saladsMenu(){
      $(".nav.nav-tabs.nav-justified li").removeClass("active");
      $("#salads").addClass("active");
      var text1 = document.getElementById('menuTitleOne');
      var text2 = document.getElementById('menuTitleTwo');
      var text3 = document.getElementById('menuTitleThree');
      var text4 = document.getElementById('menuTitleFour');
      var text5 = document.getElementById('menuTitleFive');
      var text6 = document.getElementById('menuTitleSix');
      var text7 = document.getElementById('menuTitleSeven');
      var text8 = document.getElementById('menuTitleEight');

        var img1 = document.getElementById('imageOne');
        var a = document.getElementById('traditionalP');
        var b = document.getElementById('tradCheese');
        var c = document.getElementById('tradPepp');
        
        var img2 = document.getElementById('imageTwo');
        var d = document.getElementById('size');
        var e = document.getElementById('pWalnuts');
        var f = document.getElementById('tko');
        var g = document.getElementById('spinageTroi');
        var h = document.getElementById('mikeyShow');
        var i = document.getElementById('bPie');
        var j = document.getElementById('hawaii');
        var k = document.getElementById('xmasPie');
        var m = document.getElementById('whiteCaps');
        var n = document.getElementById('whiteMeat');

        var img3 = document.getElementById('imageThree');
        var l = document.getElementById('cSize');
        var o = document.getElementById('petsy');
        var p = document.getElementById('bbq');
        var q = document.getElementById('buffalo');
        var r = document.getElementById('ranch');
        var s = document.getElementById('chipotle');

        var img4 = document.getElementById('imageFour');
        var t = document.getElementById('hSize');
        var u = document.getElementById('veggie');
        var v = document.getElementById('italian');
        var w = document.getElementById('monaVi');
        var x = document.getElementById('margarita');
        var y = document.getElementById('vegan');

        var img5 = document.getElementById('imageFive');
        var z = document.getElementById('calzone');
        var aa = document.getElementById('stromboli');
        var ab = document.getElementById('sausageRoll');
        var ac = document.getElementById('meatballRoll');
        var ad = document.getElementById('spinachRoll');

        var img6 = document.getElementById('imageSix');
        var ae = document.getElementById('italianSub');
        var af = document.getElementById('stromboliSan');
        var ag = document.getElementById('parm');

        var img7 = document.getElementById('imageSeven');
        var ah = document.getElementById('garden');
        var ai = document.getElementById('caesar');
        var aj = document.getElementById('greek');
        var ak = document.getElementById('antipasta');
        var am = document.getElementById('addChicken');
        var an = document.getElementById('sideDressing');
        var al = document.getElementById('sizeSalad');

        var img8 = document.getElementById('imageEight');
        var ao = document.getElementById('sizeApp');
        var ap = document.getElementById('meatballsApp');
        var aq = document.getElementById('gBread');
        var ar = document.getElementById('gBigBread');
        var as = document.getElementById('cheeseApp');

        var img9 = document.getElementById('imageNine');
        var at = document.getElementById('nycc');
        var au = document.getElementById('fc');

        var img10 = document.getElementById('imageTen');
        var av = document.getElementById('fountain');
        var aw = document.getElementById('twoL');
        var ax = document.getElementById('domesticBeer');
        var ay = document.getElementById('importedBeer');
        var az = document.getElementById('localCraft');
        var ba = document.getElementById('comboBeer');
        var bb = document.getElementById('sodaCan');

        var img11 = document.getElementById('imageEleven');
        var bc = document.getElementById('slice');
        var bd = document.getElementById('twoSlice');
        var be = document.getElementById('oneSlice');
        var bf = document.getElementById('threeSlice');
        var bg = document.getElementById('eightSlice');

        text1.style.display = 'none';
        text2.style.display = 'none';
        text3.style.display = 'none';
        text4.style.display = 'block';
        text5.style.display = 'none';
        text6.style.display = 'none';
        text7.style.display = 'none';
        text8.style.display = 'none';

        img1.style.display = 'none';
        a.style.display = 'none';
        b.style.display = 'none';
        c.style.display = 'none';

        img2.style.display = 'none';
        d.style.display = 'none';
        e.style.display = 'none';
        f.style.display = 'none';
        g.style.display = 'none';
        h.style.display = 'none';
        i.style.display = 'none';
        j.style.display = 'none';
        k.style.display = 'none';
        m.style.display = 'none';
        n.style.display = 'none';

        img3.style.display = 'none';
        l.style.display = 'none';
        o.style.display = 'none';
        p.style.display = 'none';
        q.style.display = 'none';
        r.style.display = 'none';
        s.style.display = 'none';

        img4.style.display = 'none';
        t.style.display = 'none';
        u.style.display = 'none';
        v.style.display = 'none';
        w.style.display = 'none';
        x.style.display = 'none';
        y.style.display = 'none';

        img5.style.display = 'none';
        z.style.display = 'none';
        aa.style.display = 'none';
        ab.style.display = 'none';
        ac.style.display = 'none';
        ad.style.display = 'none';
        
        img6.style.display = 'none';
        ae.style.display = 'none';
        af.style.display = 'none';
        ag.style.display = 'none';

        img7.style.display = 'block';
        ah.style.display = 'block';
        ai.style.display = 'block';
        aj.style.display = 'block';
        ak.style.display = 'block';
        am.style.display = 'block';
        an.style.display = 'block';
        al.style.display = 'block';

        img8.style.display = 'none';
        ao.style.display = 'none';
        ap.style.display = 'none';
        aq.style.display = 'none';
        ar.style.display = 'none';
        as.style.display = 'none';
        
        img9.style.display = 'none';
        at.style.display = 'none';
        au.style.display = 'none';

        img10.style.display = 'none';
        av.style.display = 'none';
        aw.style.display = 'none';
        ax.style.display = 'none';
        ay.style.display = 'none';
        az.style.display = 'none';
        ba.style.display = 'none';
        bb.style.display = 'none';

        img11.style.display = 'none';
        bc.style.display = 'none';
        bd.style.display = 'none';
        be.style.display = 'none';
        bf.style.display = 'none';        
        bg.style.display = 'none';

    }

    function appMenu(){
      $(".nav.nav-tabs.nav-justified li").removeClass("active");
      $("#apps").addClass("active");
      var text1 = document.getElementById('menuTitleOne');
      var text2 = document.getElementById('menuTitleTwo');
      var text3 = document.getElementById('menuTitleThree');
      var text4 = document.getElementById('menuTitleFour');
      var text5 = document.getElementById('menuTitleFive');
      var text6 = document.getElementById('menuTitleSix');
      var text7 = document.getElementById('menuTitleSeven');
      var text8 = document.getElementById('menuTitleEight');

        var img1 = document.getElementById('imageOne');
        var a = document.getElementById('traditionalP');
        var b = document.getElementById('tradCheese');
        var c = document.getElementById('tradPepp');
        
        var img2 = document.getElementById('imageTwo');
        var d = document.getElementById('size');
        var e = document.getElementById('pWalnuts');
        var f = document.getElementById('tko');
        var g = document.getElementById('spinageTroi');
        var h = document.getElementById('mikeyShow');
        var i = document.getElementById('bPie');
        var j = document.getElementById('hawaii');
        var k = document.getElementById('xmasPie');
        var m = document.getElementById('whiteCaps');
        var n = document.getElementById('whiteMeat');

        var img3 = document.getElementById('imageThree');
        var l = document.getElementById('cSize');
        var o = document.getElementById('petsy');
        var p = document.getElementById('bbq');
        var q = document.getElementById('buffalo');
        var r = document.getElementById('ranch');
        var s = document.getElementById('chipotle');

        var img4 = document.getElementById('imageFour');
        var t = document.getElementById('hSize');
        var u = document.getElementById('veggie');
        var v = document.getElementById('italian');
        var w = document.getElementById('monaVi');
        var x = document.getElementById('margarita');
        var y = document.getElementById('vegan');

        var img5 = document.getElementById('imageFive');
        var z = document.getElementById('calzone');
        var aa = document.getElementById('stromboli');
        var ab = document.getElementById('sausageRoll');
        var ac = document.getElementById('meatballRoll');
        var ad = document.getElementById('spinachRoll');

        var img6 = document.getElementById('imageSix');
        var ae = document.getElementById('italianSub');
        var af = document.getElementById('stromboliSan');
        var ag = document.getElementById('parm');

        var img7 = document.getElementById('imageSeven');
        var ah = document.getElementById('garden');
        var ai = document.getElementById('caesar');
        var aj = document.getElementById('greek');
        var ak = document.getElementById('antipasta');
        var am = document.getElementById('addChicken');
        var an = document.getElementById('sideDressing');
        var al = document.getElementById('sizeSalad');

        var img8 = document.getElementById('imageEight');
        var ao = document.getElementById('sizeApp');
        var ap = document.getElementById('meatballsApp');
        var aq = document.getElementById('gBread');
        var ar = document.getElementById('gBigBread');
        var as = document.getElementById('cheeseApp');

        var img9 = document.getElementById('imageNine');
        var at = document.getElementById('nycc');
        var au = document.getElementById('fc');

        var img10 = document.getElementById('imageTen');
        var av = document.getElementById('fountain');
        var aw = document.getElementById('twoL');
        var ax = document.getElementById('domesticBeer');
        var ay = document.getElementById('importedBeer');
        var az = document.getElementById('localCraft');
        var ba = document.getElementById('comboBeer');
        var bb = document.getElementById('sodaCan');

        var img11 = document.getElementById('imageEleven');
        var bc = document.getElementById('slice');
        var bd = document.getElementById('twoSlice');
        var be = document.getElementById('oneSlice');
        var bf = document.getElementById('threeSlice');
        var bg = document.getElementById('eightSlice');

        text1.style.display = 'none';
        text2.style.display = 'none';
        text3.style.display = 'none';
        text4.style.display = 'none';
        text5.style.display = 'block';
        text6.style.display = 'none';
        text7.style.display = 'none';
        text8.style.display = 'none';

        img1.style.display = 'none';
        a.style.display = 'none';
        b.style.display = 'none';
        c.style.display = 'none';

        img2.style.display = 'none';
        d.style.display = 'none';
        e.style.display = 'none';
        f.style.display = 'none';
        g.style.display = 'none';
        h.style.display = 'none';
        i.style.display = 'none';
        j.style.display = 'none';
        k.style.display = 'none';
        m.style.display = 'none';
        n.style.display = 'none';

        img3.style.display = 'none';
        l.style.display = 'none';
        o.style.display = 'none';
        p.style.display = 'none';
        q.style.display = 'none';
        r.style.display = 'none';
        s.style.display = 'none';

        img4.style.display = 'none';
        t.style.display = 'none';
        u.style.display = 'none';
        v.style.display = 'none';
        w.style.display = 'none';
        x.style.display = 'none';
        y.style.display = 'none';

        img5.style.display = 'none';
        z.style.display = 'none';
        aa.style.display = 'none';
        ab.style.display = 'none';
        ac.style.display = 'none';
        ad.style.display = 'none';
        
        img6.style.display = 'none';
        ae.style.display = 'none';
        af.style.display = 'none';
        ag.style.display = 'none';

        img7.style.display = 'none';
        ah.style.display = 'none';
        ai.style.display = 'none';
        aj.style.display = 'none';
        ak.style.display = 'none';
        am.style.display = 'none';
        an.style.display = 'none';
        al.style.display = 'none';

        img8.style.display = 'block';
        ao.style.display = 'block';
        ap.style.display = 'block';
        aq.style.display = 'block';
        ar.style.display = 'block';
        as.style.display = 'block';
        
        img9.style.display = 'none';
        at.style.display = 'none';
        au.style.display = 'none';

        img10.style.display = 'none';
        av.style.display = 'none';
        aw.style.display = 'none';
        ax.style.display = 'none';
        ay.style.display = 'none';
        az.style.display = 'none';
        ba.style.display = 'none';
        bb.style.display = 'none';

        img11.style.display = 'none';
        bc.style.display = 'none';
        bd.style.display = 'none';
        be.style.display = 'none';
        bf.style.display = 'none';        
        bg.style.display = 'none';

    }

    function dessertsMenu(){
      $(".nav.nav-tabs.nav-justified li").removeClass("active");
      $("#desserts").addClass("active");
      var text1 = document.getElementById('menuTitleOne');
      var text2 = document.getElementById('menuTitleTwo');
      var text3 = document.getElementById('menuTitleThree');
      var text4 = document.getElementById('menuTitleFour');
      var text5 = document.getElementById('menuTitleFive');
      var text6 = document.getElementById('menuTitleSix');
      var text7 = document.getElementById('menuTitleSeven');
      var text8 = document.getElementById('menuTitleEight');

        var img1 = document.getElementById('imageOne');
        var a = document.getElementById('traditionalP');
        var b = document.getElementById('tradCheese');
        var c = document.getElementById('tradPepp');
        
        var img2 = document.getElementById('imageTwo');
        var d = document.getElementById('size');
        var e = document.getElementById('pWalnuts');
        var f = document.getElementById('tko');
        var g = document.getElementById('spinageTroi');
        var h = document.getElementById('mikeyShow');
        var i = document.getElementById('bPie');
        var j = document.getElementById('hawaii');
        var k = document.getElementById('xmasPie');
        var m = document.getElementById('whiteCaps');
        var n = document.getElementById('whiteMeat');

        var img3 = document.getElementById('imageThree');
        var l = document.getElementById('cSize');
        var o = document.getElementById('petsy');
        var p = document.getElementById('bbq');
        var q = document.getElementById('buffalo');
        var r = document.getElementById('ranch');
        var s = document.getElementById('chipotle');

        var img4 = document.getElementById('imageFour');
        var t = document.getElementById('hSize');
        var u = document.getElementById('veggie');
        var v = document.getElementById('italian');
        var w = document.getElementById('monaVi');
        var x = document.getElementById('margarita');
        var y = document.getElementById('vegan');

        var img5 = document.getElementById('imageFive');
        var z = document.getElementById('calzone');
        var aa = document.getElementById('stromboli');
        var ab = document.getElementById('sausageRoll');
        var ac = document.getElementById('meatballRoll');
        var ad = document.getElementById('spinachRoll');

        var img6 = document.getElementById('imageSix');
        var ae = document.getElementById('italianSub');
        var af = document.getElementById('stromboliSan');
        var ag = document.getElementById('parm');

        var img7 = document.getElementById('imageSeven');
        var ah = document.getElementById('garden');
        var ai = document.getElementById('caesar');
        var aj = document.getElementById('greek');
        var ak = document.getElementById('antipasta');
        var am = document.getElementById('addChicken');
        var an = document.getElementById('sideDressing');
        var al = document.getElementById('sizeSalad');

        var img8 = document.getElementById('imageEight');
        var ao = document.getElementById('sizeApp');
        var ap = document.getElementById('meatballsApp');
        var aq = document.getElementById('gBread');
        var ar = document.getElementById('gBigBread');
        var as = document.getElementById('cheeseApp');

        var img9 = document.getElementById('imageNine');
        var at = document.getElementById('nycc');
        var au = document.getElementById('fc');

        var img10 = document.getElementById('imageTen');
        var av = document.getElementById('fountain');
        var aw = document.getElementById('twoL');
        var ax = document.getElementById('domesticBeer');
        var ay = document.getElementById('importedBeer');
        var az = document.getElementById('localCraft');
        var ba = document.getElementById('comboBeer');
        var bb = document.getElementById('sodaCan');

        var img11 = document.getElementById('imageEleven');
        var bc = document.getElementById('slice');
        var bd = document.getElementById('twoSlice');
        var be = document.getElementById('oneSlice');
        var bf = document.getElementById('threeSlice');
        var bg = document.getElementById('eightSlice');

        text1.style.display = 'none';
        text2.style.display = 'none';
        text3.style.display = 'none';
        text4.style.display = 'none';
        text5.style.display = 'none';
        text6.style.display = 'block';
        text7.style.display = 'none';
        text8.style.display = 'none';

        img1.style.display = 'none';
        a.style.display = 'none';
        b.style.display = 'none';
        c.style.display = 'none';

        img2.style.display = 'none';
        d.style.display = 'none';
        e.style.display = 'none';
        f.style.display = 'none';
        g.style.display = 'none';
        h.style.display = 'none';
        i.style.display = 'none';
        j.style.display = 'none';
        k.style.display = 'none';
        m.style.display = 'none';
        n.style.display = 'none';

        img3.style.display = 'none';
        l.style.display = 'none';
        o.style.display = 'none';
        p.style.display = 'none';
        q.style.display = 'none';
        r.style.display = 'none';
        s.style.display = 'none';

        img4.style.display = 'none';
        t.style.display = 'none';
        u.style.display = 'none';
        v.style.display = 'none';
        w.style.display = 'none';
        x.style.display = 'none';
        y.style.display = 'none';

        img5.style.display = 'none';
        z.style.display = 'none';
        aa.style.display = 'none';
        ab.style.display = 'none';
        ac.style.display = 'none';
        ad.style.display = 'none';
        
        img6.style.display = 'none';
        ae.style.display = 'none';
        af.style.display = 'none';
        ag.style.display = 'none';

        img7.style.display = 'none';
        ah.style.display = 'none';
        ai.style.display = 'none';
        aj.style.display = 'none';
        ak.style.display = 'none';
        am.style.display = 'none';
        an.style.display = 'none';
        al.style.display = 'none';

        img8.style.display = 'none';
        ao.style.display = 'none';
        ap.style.display = 'none';
        aq.style.display = 'none';
        ar.style.display = 'none';
        as.style.display = 'none';
        
        img9.style.display = 'block';
        at.style.display = 'block';
        au.style.display = 'block';

        img10.style.display = 'none';
        av.style.display = 'none';
        aw.style.display = 'none';
        ax.style.display = 'none';
        ay.style.display = 'none';
        az.style.display = 'none';
        ba.style.display = 'none';
        bb.style.display = 'none';

        img11.style.display = 'none';
        bc.style.display = 'none';
        bd.style.display = 'none';
        be.style.display = 'none';
        bf.style.display = 'none';        
        bg.style.display = 'none';

    }

    function drinksMenu(){
      $(".nav.nav-tabs.nav-justified li").removeClass("active");
      $("#drinks").addClass("active");
      var text1 = document.getElementById('menuTitleOne');
      var text2 = document.getElementById('menuTitleTwo');
      var text3 = document.getElementById('menuTitleThree');
      var text4 = document.getElementById('menuTitleFour');
      var text5 = document.getElementById('menuTitleFive');
      var text6 = document.getElementById('menuTitleSix');
      var text7 = document.getElementById('menuTitleSeven');
      var text8 = document.getElementById('menuTitleEight');

        var img1 = document.getElementById('imageOne');
        var a = document.getElementById('traditionalP');
        var b = document.getElementById('tradCheese');
        var c = document.getElementById('tradPepp');
        
        var img2 = document.getElementById('imageTwo');
        var d = document.getElementById('size');
        var e = document.getElementById('pWalnuts');
        var f = document.getElementById('tko');
        var g = document.getElementById('spinageTroi');
        var h = document.getElementById('mikeyShow');
        var i = document.getElementById('bPie');
        var j = document.getElementById('hawaii');
        var k = document.getElementById('xmasPie');
        var m = document.getElementById('whiteCaps');
        var n = document.getElementById('whiteMeat');

        var img3 = document.getElementById('imageThree');
        var l = document.getElementById('cSize');
        var o = document.getElementById('petsy');
        var p = document.getElementById('bbq');
        var q = document.getElementById('buffalo');
        var r = document.getElementById('ranch');
        var s = document.getElementById('chipotle');

        var img4 = document.getElementById('imageFour');
        var t = document.getElementById('hSize');
        var u = document.getElementById('veggie');
        var v = document.getElementById('italian');
        var w = document.getElementById('monaVi');
        var x = document.getElementById('margarita');
        var y = document.getElementById('vegan');

        var img5 = document.getElementById('imageFive');
        var z = document.getElementById('calzone');
        var aa = document.getElementById('stromboli');
        var ab = document.getElementById('sausageRoll');
        var ac = document.getElementById('meatballRoll');
        var ad = document.getElementById('spinachRoll');

        var img6 = document.getElementById('imageSix');
        var ae = document.getElementById('italianSub');
        var af = document.getElementById('stromboliSan');
        var ag = document.getElementById('parm');

        var img7 = document.getElementById('imageSeven');
        var ah = document.getElementById('garden');
        var ai = document.getElementById('caesar');
        var aj = document.getElementById('greek');
        var ak = document.getElementById('antipasta');
        var am = document.getElementById('addChicken');
        var an = document.getElementById('sideDressing');
        var al = document.getElementById('sizeSalad');

        var img8 = document.getElementById('imageEight');
        var ao = document.getElementById('sizeApp');
        var ap = document.getElementById('meatballsApp');
        var aq = document.getElementById('gBread');
        var ar = document.getElementById('gBigBread');
        var as = document.getElementById('cheeseApp');

        var img9 = document.getElementById('imageNine');
        var at = document.getElementById('nycc');
        var au = document.getElementById('fc');

        var img10 = document.getElementById('imageTen');
        var av = document.getElementById('fountain');
        var aw = document.getElementById('twoL');
        var ax = document.getElementById('domesticBeer');
        var ay = document.getElementById('importedBeer');
        var az = document.getElementById('localCraft');
        var ba = document.getElementById('comboBeer');
        var bb = document.getElementById('sodaCan');

        var img11 = document.getElementById('imageEleven');
        var bc = document.getElementById('slice');
        var bd = document.getElementById('twoSlice');
        var be = document.getElementById('oneSlice');
        var bf = document.getElementById('threeSlice');
        var bg = document.getElementById('eightSlice');

        text1.style.display = 'none';
        text2.style.display = 'none';
        text3.style.display = 'none';
        text4.style.display = 'none';
        text5.style.display = 'none';
        text6.style.display = 'none';
        text7.style.display = 'block';
        text8.style.display = 'none';

        img1.style.display = 'none';
        a.style.display = 'none';
        b.style.display = 'none';
        c.style.display = 'none';

        img2.style.display = 'none';
        d.style.display = 'none';
        e.style.display = 'none';
        f.style.display = 'none';
        g.style.display = 'none';
        h.style.display = 'none';
        i.style.display = 'none';
        j.style.display = 'none';
        k.style.display = 'none';
        m.style.display = 'none';
        n.style.display = 'none';

        img3.style.display = 'none';
        l.style.display = 'none';
        o.style.display = 'none';
        p.style.display = 'none';
        q.style.display = 'none';
        r.style.display = 'none';
        s.style.display = 'none';

        img4.style.display = 'none';
        t.style.display = 'none';
        u.style.display = 'none';
        v.style.display = 'none';
        w.style.display = 'none';
        x.style.display = 'none';
        y.style.display = 'none';

        img5.style.display = 'none';
        z.style.display = 'none';
        aa.style.display = 'none';
        ab.style.display = 'none';
        ac.style.display = 'none';
        ad.style.display = 'none';
        
        img6.style.display = 'none';
        ae.style.display = 'none';
        af.style.display = 'none';
        ag.style.display = 'none';

        img7.style.display = 'none';
        ah.style.display = 'none';
        ai.style.display = 'none';
        aj.style.display = 'none';
        ak.style.display = 'none';
        am.style.display = 'none';
        an.style.display = 'none';
        al.style.display = 'none';

        img8.style.display = 'none';
        ao.style.display = 'none';
        ap.style.display = 'none';
        aq.style.display = 'none';
        ar.style.display = 'none';
        as.style.display = 'none';
        
        img9.style.display = 'none';
        at.style.display = 'none';
        au.style.display = 'none';

        img10.style.display = 'block';
        av.style.display = 'block';
        aw.style.display = 'block';
        ax.style.display = 'block';
        ay.style.display = 'block';
        az.style.display = 'block';
        ba.style.display = 'block';
        bb.style.display = 'block';

        img11.style.display = 'none';
        bc.style.display = 'none';
        bd.style.display = 'none';
        be.style.display = 'none';
        bf.style.display = 'none';        
        bg.style.display = 'none';

    }

    function specialsMenu(){
      $(".nav.nav-tabs.nav-justified li").removeClass("active");
      $("#specials").addClass("active");
      var text1 = document.getElementById('menuTitleOne');
      var text2 = document.getElementById('menuTitleTwo');
      var text3 = document.getElementById('menuTitleThree');
      var text4 = document.getElementById('menuTitleFour');
      var text5 = document.getElementById('menuTitleFive');
      var text6 = document.getElementById('menuTitleSix');
      var text7 = document.getElementById('menuTitleSeven');
      var text8 = document.getElementById('menuTitleEight');
      

        var img1 = document.getElementById('imageOne');
        var a = document.getElementById('traditionalP');
        var b = document.getElementById('tradCheese');
        var c = document.getElementById('tradPepp');
        
        var img2 = document.getElementById('imageTwo');
        var d = document.getElementById('size');
        var e = document.getElementById('pWalnuts');
        var f = document.getElementById('tko');
        var g = document.getElementById('spinageTroi');
        var h = document.getElementById('mikeyShow');
        var i = document.getElementById('bPie');
        var j = document.getElementById('hawaii');
        var k = document.getElementById('xmasPie');
        var m = document.getElementById('whiteCaps');
        var n = document.getElementById('whiteMeat');

        var img3 = document.getElementById('imageThree');
        var l = document.getElementById('cSize');
        var o = document.getElementById('petsy');
        var p = document.getElementById('bbq');
        var q = document.getElementById('buffalo');
        var r = document.getElementById('ranch');
        var s = document.getElementById('chipotle');

        var img4 = document.getElementById('imageFour');
        var t = document.getElementById('hSize');
        var u = document.getElementById('veggie');
        var v = document.getElementById('italian');
        var w = document.getElementById('monaVi');
        var x = document.getElementById('margarita');
        var y = document.getElementById('vegan');

        var img5 = document.getElementById('imageFive');
        var z = document.getElementById('calzone');
        var aa = document.getElementById('stromboli');
        var ab = document.getElementById('sausageRoll');
        var ac = document.getElementById('meatballRoll');
        var ad = document.getElementById('spinachRoll');

        var img6 = document.getElementById('imageSix');
        var ae = document.getElementById('italianSub');
        var af = document.getElementById('stromboliSan');
        var ag = document.getElementById('parm');

        var img7 = document.getElementById('imageSeven');
        var ah = document.getElementById('garden');
        var ai = document.getElementById('caesar');
        var aj = document.getElementById('greek');
        var ak = document.getElementById('antipasta');
        var am = document.getElementById('addChicken');
        var an = document.getElementById('sideDressing');
        var al = document.getElementById('sizeSalad');

        var img8 = document.getElementById('imageEight');
        var ao = document.getElementById('sizeApp');
        var ap = document.getElementById('meatballsApp');
        var aq = document.getElementById('gBread');
        var ar = document.getElementById('gBigBread');
        var as = document.getElementById('cheeseApp');

        var img9 = document.getElementById('imageNine');
        var at = document.getElementById('nycc');
        var au = document.getElementById('fc');

        var img10 = document.getElementById('imageTen');
        var av = document.getElementById('fountain');
        var aw = document.getElementById('twoL');
        var ax = document.getElementById('domesticBeer');
        var ay = document.getElementById('importedBeer');
        var az = document.getElementById('localCraft');
        var ba = document.getElementById('comboBeer');
        var bb = document.getElementById('sodaCan');

        var img11 = document.getElementById('imageEleven');
        var bc = document.getElementById('slice');
        var bd = document.getElementById('twoSlice');
        var be = document.getElementById('oneSlice');
        var bf = document.getElementById('threeSlice');
        var bg = document.getElementById('eightSlice');

        text1.style.display = 'none';
        text2.style.display = 'none';
        text3.style.display = 'none';
        text4.style.display = 'none';
        text5.style.display = 'none';
        text6.style.display = 'none';
        text7.style.display = 'none';
        text8.style.display = 'block';

        img1.style.display = 'none';
        a.style.display = 'none';
        b.style.display = 'none';
        c.style.display = 'none';

        img2.style.display = 'none';
        d.style.display = 'none';
        e.style.display = 'none';
        f.style.display = 'none';
        g.style.display = 'none';
        h.style.display = 'none';
        i.style.display = 'none';
        j.style.display = 'none';
        k.style.display = 'none';
        m.style.display = 'none';
        n.style.display = 'none';

        img3.style.display = 'none';
        l.style.display = 'none';
        o.style.display = 'none';
        p.style.display = 'none';
        q.style.display = 'none';
        r.style.display = 'none';
        s.style.display = 'none';

        img4.style.display = 'none';
        t.style.display = 'none';
        u.style.display = 'none';
        v.style.display = 'none';
        w.style.display = 'none';
        x.style.display = 'none';
        y.style.display = 'none';

        img5.style.display = 'none';
        z.style.display = 'none';
        aa.style.display = 'none';
        ab.style.display = 'none';
        ac.style.display = 'none';
        ad.style.display = 'none';
        
        img6.style.display = 'none';
        ae.style.display = 'none';
        af.style.display = 'none';
        ag.style.display = 'none';

        img7.style.display = 'none';
        ah.style.display = 'none';
        ai.style.display = 'none';
        aj.style.display = 'none';
        ak.style.display = 'none';
        am.style.display = 'none';
        an.style.display = 'none';
        al.style.display = 'none';

        img8.style.display = 'none';
        ao.style.display = 'none';
        ap.style.display = 'none';
        aq.style.display = 'none';
        ar.style.display = 'none';
        as.style.display = 'none';
        
        img9.style.display = 'none';
        at.style.display = 'none';
        au.style.display = 'none';

        img10.style.display = 'none';
        av.style.display = 'none';
        aw.style.display = 'none';
        ax.style.display = 'none';
        ay.style.display = 'none';
        az.style.display = 'none';
        ba.style.display = 'none';
        bb.style.display = 'none';

        img11.style.display = 'block';
        bc.style.display = 'block';
        bd.style.display = 'block';
        be.style.display = 'block';
        bf.style.display = 'block';        
        bg.style.display = 'block';

    }