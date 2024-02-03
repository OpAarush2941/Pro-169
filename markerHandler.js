AFRAME.registerComponent("markerhandler", {
    init:async function(){
        this.el.addEventListener("markerFound", () => {
            console.log("Marker Found");
            this.handleMarkerFound();
        });

        this.el.addEventListener("markerLost", () => {
            console.log("Marker Lost");
            this.handleMarkerLost();
        });
    },
    handleMarkerFound:function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";

        var summeryButton = document.getElementById("summery-button");
        var orderButton = document.getElementById("order-button");
        
        summeryButton.addEventListener("click", function() {
            swal({
                icon:"warning",
                title:"Order Summery",
                text:"Work in Progress"
            });
        });

        orderButton.addEventListener("click",()=>{
            swal({
                icon:"https://i.pinimg.com/originals/8d/bc/24/8dbc241452d40145a57502fe9a9292bd.jpg",
                title:"Ordered Completed!",
                text:"Your order will be delivered soon!"
            });
        });
    },
    handleMarkerLost:function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    }
})