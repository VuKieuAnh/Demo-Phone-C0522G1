class Phone {
    battery
    draft
    inbox
    sent

    constructor(battery, draft, inbox, sent) {
        this.battery = battery;
        this.draft = draft;
        this.inbox = inbox;
        this.sent = sent;
    }
    checkOnOff(){
        // if (this.battery>0) return true
        // else return  false;
        return this.battery>0;
    }

    charge(){
        this.battery=100;
    }

    typing(newMess){
        this.draft = newMess;
    }

    send(newPhone){
        //chuyển thư nháp vào hộp thư đến của điện thoại khác
        newPhone.inbox.push(this.draft);
        //chuyển thư nháp vào hôp thư đã gửi của chính đt này
        this.sent.push(this.draft);
        //giảm pin
        this.battery--;
        //xoá thư nháp
        this.draft ="";
    }
}

let quangAnh = new Phone(10, "", [], [])
let binh = new Phone(8, "", [], [])
