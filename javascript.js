const controlAlert = (status,btnControl) => {
    document.querySelector(".alert-box").style.display=status;

    if(btnControl === 'false'){
        document.querySelector('.btn_open').style.display='none'
    }
    else{
        document.querySelector('.btn_open').style.display='block'
    }
}

document.querySelector(".btn_open").addEventListener("click", () => controlAlert('flex','false'));
document.querySelector('.btn_close').addEventListener('click', () => controlAlert('none','true'));