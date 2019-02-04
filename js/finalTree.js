        const a = `<strong>これまでの転勤/転職回数は？</strong> 
                    <a id="aOp1" href="#" class="btn btn-xs btn-success pull-right ml-4" onclick="decision('aOp2', 'c')">6回以上</a>
                    <a id="aOp2" href="#" class="btn btn-xs btn-warning pull-right ml-2" onclick="decision('aOp1', 'd')">5回以下</a>`; 
            
        const b = `<strong>仕事を探すときに最も重要とすることは？</strong> 
                   <a id="bOp1" href="#" class="btn btn-xs btn-success pull-right ml-4" onclick="decision('bOp2', 'f')">人間関係</a>
                   <a id="bOp2" href="#" class="btn btn-xs btn-warning pull-right ml-2" onclick="decision('bOp3', 'g')">ワークライフバランゥ</a>
                   <a id="bOp3" href="#" class="btn btn-xs btn-danger pull-right ml-2" onclick="decision('bOp1', 'c')">条件（収入、勤務日数など）</a>`;

        const c = `<strong>これまでに紹介会社に登録、利用したことはある？</strong> 
                   <a id="cYes" href="#" class="btn btn-xs btn-success pull-right ml-4" onclick="decision('cNo', 'd')">Yes</a>
                   <a id="cNo" href="#" class="btn btn-xs btn-warning pull-right ml-2" onclick="decision('cYes', 'h')">No</a>`;

        const d = `<strong>現在の勤務先は医局人事ですか？</strong> 
                    <a id="dYes" href="#" class="btn btn-xs btn-success pull-right ml-4" onclick="decision('dNo', 'e')">Yes</a>
                    <a id="dNo" href="#" class="btn btn-xs btn-warning pull-right ml-2" onclick="decision('dYes', 'k')">No</a>`;

        const e = `<strong>医局人に疑問があり、ちょうど転職を考えている</strong> 
                    <a id="eYes" href="#" class="btn btn-xs btn-success pull-right ml-4" >Yes D</a>
                    <a id="eNo" href="#" class="btn btn-xs btn-warning pull-right ml-2" >No A</a>`;

        const f = `<strong>今まさに人間関係に違和感を感じている？</strong> 
                    <a id="fYes" href="#" class="btn btn-xs btn-success pull-right ml-4" onclick="decision('fNo', 'i')">Yes</a>
                    <a id="fNo" href="#" class="btn btn-xs btn-warning pull-right ml-2" onclick="decision('fYes', 'j')">No</a>`;

        const g = `<strong>月ごとにスケジュールを貯製できる勤務をしたい？</strong> 
                    <a id="gYes" href="#" class="btn btn-xs btn-success pull-right ml-4" onclick="decision('gNo', 'h')">Yes</a>
                    <a id="gNo" href="#" class="btn btn-xs btn-warning pull-right ml-2" onclick="decision('gYes', 'i')">No</a>`;

        const h = `<strong>年齢、専門を問わず医療に携わっていきたい？</strong> 
                    <a href="#" class="btn btn-xs btn-success pull-right ml-4">Yes CallC</a>
                    <a href="#" class="btn btn-xs btn-warning pull-right ml-2">No Call B</a>`;

        const i = `<strong>今すぐに環境を変えたいと思っている？</strong> 
                    <a id="iYes" href="#" class="btn btn-xs btn-success pull-right ml-4" >Yes call D</a>
                    <a id="iNo" href="#" class="btn btn-xs btn-warning pull-right ml-2" onclick="decision('iYes', 'j')">No</a>`;

        const j = `<strong>将来を考えてアルバイトをしながら情報取集をしたい？</strong> 
                    <a href="#" class="btn btn-xs btn-success pull-right ml-4">Yes Call E</a>
                    <a href="#" class="btn btn-xs btn-warning pull-right ml-2">No Call A</a>`;

        const k = `<strong>空いた時間でアルバイトを考えている？</strong> 
                    <a href="#" class="btn btn-xs btn-success pull-right ml-4">Yes Call B</a>
                    <a href="#" class="btn btn-xs btn-warning pull-right ml-2">No Call A</a>`;

        const myCSS = 'alert alert-info';
        const parentElm = document.getElementById("init");
        
        //const childElm = document.getElementById("root");

        function decision(hideId, showId){
            
            document.getElementById(hideId).style.display = 'none';

            switch (showId) {
                case 'a':
                    createDiv('a');
                    createNode('a', a );
                    break;
                case 'b':
                    createDiv('b');
                    createNode('b', b );
                    break;
                case 'c':
                    createDiv('c');
                    createNode('c', c );
                    break;
                case 'd':
                    createDiv('d');
                    createNode('d', d );
                    break;
                case 'e':
                    createDiv('e');
                    createNode('e', e );
                    break;
                case 'f':
                    createDiv('f');
                    createNode('f', f );
                    break;
                case 'g':
                    createDiv('g');
                    createNode('g', g );
                    break;
                case 'h':
                    createDiv('h');
                    createNode('h', h );
                    break;
                case 'i':
                    createDiv('i');
                    createNode('i', i );
                    break;
                case 'j':
                    createDiv('j');
                    createNode('j', j );
                    break;
                case 'k':
                    createDiv('k');
                    createNode('k', k );
                    break;
                default:
                    break;
            }
        }
        function createDiv(divId){
            var div = document.createElement("div");//div
            div.setAttribute("id", divId);//
            div.setAttribute("class", myCSS);
            parentElm.appendChild(div);//
        }

        function createNode(parentID, text){
            document.getElementById(parentID).innerHTML=text;//
        }