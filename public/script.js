function recordAns(oButton) {
    let formEle = oButton.parentNode.parentNode.querySelectorAll('.ansInput')
    let uid=''
    fetch("/recAns", {
        method: "POST",
        body: JSON.stringify({
            answer : formEle[0].value,
            // student_gender : formEle[1].value,
            // student_activity_score : formEle[2].value,
            // student_bookb_num : formEle[3].value,
            // student_bookc_num : formEle[4].value,
            // student_unit_num : formEle[5].value,
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(response => {
            console.log("sent");
            uid = response
            console.log(response)
        })
    // .then(response => {
    //     addRow(formEle[0].value, formEle[1].value, formEle[2].value, formEle[3].value, formEle[4].value, formEle[5].value, uid)
    // })
}