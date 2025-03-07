let mbp = 0; //monthly base pay
let yoas = 0; //years of active service

const mbpInput  = document.getElementById('mbp');
const yoasInput = document.getElementById('yoas');
const ivspInput = document.getElementById('ivsp');
const vspInput  = document.getElementById('vsp');

mbpInput.addEventListener('change',computeIvsp);
yoasInput.addEventListener('change',computeIvsp);

function computeIvsp() {
    let ivsp=0;
    mbp = mbpInput.value;
    yoas = yoasInput.value;

    if (yoas<=5 || yoas>20) {
        ivspInput.value="Not Eligible";
        vspInput.value="Not Eligible";
    }
    else {
        ivsp = mbp*12*yoas*0.1
        ivspInput.value=ivsp;
        vspInput.value=2*ivsp;
    }
}