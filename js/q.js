let qOne = (document.getElementsByClassName("container")[0].innerHTML = `
  <div class="question" id="question1">
    <p>1- لماذا انا هنا؟</p>
    <div class="answers">
      <div class="box O" id="O">
        <input type="radio" class="check" id="oneO" name="answer" onclick="qOAnsOne()" />
        <label for="oneO">1</label>
      </div>
      <div class="box O" id="O">
        <input type="radio" id="twoO" class="check" name="answer" onclick="qOAnsTwo()" />
        <label for="twoO">2</label>
      </div>
      <div class="box O" id="O">
        <input type="radio" id="threeO" class="check" name="answer" onclick="qOAnsThree()" />
        <label for="threeO">3</label>
      </div>
      <div class="box O" id="O">
        <input type="radio" id="fourO" class="check" name="answer" onclick="qOAnsFour()" />
        <label for="fourO">4</label>
      </div>
      <span id="BlockQOne" class="BlockQ"></span>
    </div>
  </div>`);
let qTwo = (document.getElementsByClassName("container")[0].innerHTML = `
  <div class="question" id="question2">
    <p>2- لماذا انا هنا؟</p>
    <div class="answers">
      <div class="box T" id="T">
        <input type="radio" id="oneT" class="check" name="answer" onclick="qTAnsOne()" />
        <label for="oneT">1</label>
      </div>
      <div class="box T" id="T">
        <input type="radio" id="twoT" class="check" name="answer" onclick="qTAnsTwo()" />
        <label for="twoT">2</label>
      </div>
      <div class="box T" id="T">
        <input type="radio" id="threeT" class="check" name="answer" onclick="qTAnsThree()" />
        <label for="threeT">3</label>
      </div>
      <div class="box T" id="T">
        <input type="radio" id="fourT" class="check" name="answer" onclick="qTAnsFour()" />
        <label for="fourT">4</label>
      </div>
      <span id="BlockQ" class="BlockQ"></span>
    </div>
  </div>`);
let qThree = (document.getElementsByClassName("container")[0].innerHTML = `
  <div class="question" id="question3">
    <p>3- لماذا انا هنا؟</p>
    <div class="answers">
      <div class="box Th" id="Th">
        <input type="radio" id="oneTh" class="check" name="answer" onclick="qThAnsOne()" />
        <label for="oneTh">1</label>
      </div>
      <div class="box Th" id="Th">
        <input type="radio" id="twoTh" class="check" name="answer" onclick="qThAnsTwo()" />
        <label for="twoTh">2</label>
      </div>
      <div class="box Th" id="Th">
        <input type="radio" id="threeTh" class="check" name="answer" onclick="qThAnsThree()" />
        <label for="threeTh">3</label>
      </div>
      <div class="box Th" id="Th">
        <input type="radio" id="fourTh" class="check" name="answer" onclick="qThAnsFour()" />
        <label for="fourTh">4</label>
      </div>
      <span id="BlockQ" class="BlockQ"></span>
    </div>
  </div>`);
let q4 = (document.getElementsByClassName("container")[0].innerHTML = `
  <div class="question" id="question4">
    <p>4- لماذا انا هنا؟</p>
    <div class="answers">
      <div class="box Fo" id="Fo">
        <input type="radio" id="oneFo" name="answer" onclick="q4AnsOne()" />
        <label for="oneFo">1</label>
      </div>
      <div class="box O" id="Fo">
        <input type="radio" id="twoFo" name="answer" onclick="q4AnsTwo()" />
        <label for="twoFo">2</label>
      </div>
      <div class="box O" id="Fo">
        <input type="radio" id="threeFo" name="answer" onclick="q4AnsThree()" />
        <label for="threeFo">3</label>
      </div>
      <div class="box O" id="Fo">
        <input type="radio" id="fourFo" name="answer" onclick="q4AnsFour()" />
        <label for="fourFo">4</label>
      </div>
      <span id="BlockQOne" class="BlockQ"></span>
    </div>
  </div>`);
let q5 = (document.getElementsByClassName("container")[0].innerHTML = `
  <div class="question" id="question5">
    <p>5- لماذا انا هنا؟</p>
    <div class="answers">
      <div class="box An5" id="An5">
        <input type="radio" id="oneAn5" name="answer" onclick="q5AnsOne()" />
        <label for="oneAn5">1</label>
      </div>
      <div class="box An5" id="An5">
        <input type="radio" id="twoAn5" name="answer" onclick="q5AnsTwo()" />
        <label for="twoAn5">2</label>
      </div>
      <div class="box An5" id="An5">
        <input type="radio" id="threeAn5" name="answer" onclick="q5AnsThree()" />
        <label for="threeAn5">3</label>
      </div>
      <div class="box An5" id="An5">
        <input type="radio" id="fourAn5" name="answer" onclick="q5AnsFour()" />
        <label for="fourAn5">4</label>
      </div>
      <span id="BlockQOne" class="BlockQ"></span>
    </div>
  </div>`);
let q6 = (document.getElementsByClassName("container")[0].innerHTML = `
  <div class="question" id="question6">
    <p>6- لماذا انا هنا؟</p>
    <div class="answers">
      <div class="box An6" id="An6">
        <input type="radio" id="oneAn6" name="answer" onclick="q6AnsOne()" />
        <label for="oneAn6">1</label>
      </div>
      <div class="box An6" id="An6">
        <input type="radio" id="twoAn6" name="answer" onclick="q6AnsTwo()" />
        <label for="twoAn6">2</label>
      </div>
      <div class="box An6" id="An6">
        <input type="radio" id="threeAn6" name="answer" onclick="q6AnsThree()" />
        <label for="threeAn6">3</label>
      </div>
      <div class="box An6" id="An6">
        <input type="radio" id="fourAn6" name="answer" onclick="q6AnsFour()" />
        <label for="fourAn6">4</label>
      </div>
      <span id="BlockQOne" class="BlockQ"></span>
    </div>
  </div>`);
