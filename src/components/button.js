class Button  {

    constructor(id, text) {
        this.id = id;
        this.text = text;
        
    }
    
    render() {
        return '<button id="' + this.id + '" class="btn btn-success">' + this.text + '</button>';
    }
    click (clickFunction) {
        document.getElementById(this.id).addEventListener('click', 
        () => {
            clickFunction();
        })
    }
}

export default Button;