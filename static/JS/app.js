console.log("I am in app.js");

let result = 0;

function submit_test() {
    if (document.getElementById('q1o4').checked)
        result += 1;

    if (document.getElementById('q2o3').checked)
        result += 1;

    if (document.getElementById('q3o1').checked)
        result += 1;

    if (document.getElementById('q4o1').checked)
        result += 1;

    if (document.getElementById('q5o3').checked)
        result += 1;

    if (document.getElementById('q6o3').checked)
        result += 1;

    if (document.getElementById('q7o3').checked)
        result += 1;

    if (document.getElementById('q8o3').checked)
        result += 1;

    if (document.getElementById('q9o3').checked)
        result += 1;

    if (document.getElementById('q10o3').checked)
        result += 1;

    if (document.getElementById('s_name').value == '') {
        document.getElementById('s_name').value = 'Hey';
    }

    const Sname = document.getElementById('s_name').value;

    document.getElementById('var-div').innerHTML = `<div class="text-center result-div py-3">${Sname}, you scored <strong>${result}</strong> out of <strong>10</strong>.</div>`


    let false_option = document.getElementsByClassName('false');
    let lenFalse = false_option.length;

    for (let i = 0; i < lenFalse; i++) {
        if (false_option[i].getElementsByTagName('input')[0].checked) {
            false_option[i].style.backgroundColor = '#ed3829';
            false_option[i].style.color = 'white';
        }
    }

    let true_option = document.getElementsByClassName('true');
    let len = true_option.length;

    for (var i = 0; i < len; i++) {
        true_option[i].style.backgroundColor = '#079001';
        true_option[i].style.color = 'white';
    }
}