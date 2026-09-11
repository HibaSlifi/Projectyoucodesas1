const prompt = require("prompt-sync")();
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
function AfficherMenu (){
    console.log(`==============================`);
    console.log(`RAILWAY MANAGER`);
    console.log(`==============================`);
    console.log(`1.Afficher les trajets`);
    console.log(`2.Acheter un tickets`);
    console.log(`3.Afficher les tickets`);
    console.log(`4.Annuler un ticket`);
    console.log(`5.Rechercher un trajets`);
    console.log(`6.Filter les trajets`);
    console.log(`7.Trier les trajets`);
    console.log(`0.Quiter`);
   

}
function AfficherTrajets(){
    for(let i=0;i<trips.length;i++){
        console.log(`id:${trips[i].id}`);
        console.log(`departure:${trips[i].departure}`);
        console.log(`destination:${trips[i].destination}`);
        console.log(`departureTime:${trips[i].departureTime}`);
        console.log(`arrivalTime:${trips[i].arrivalTime}`);
        console.log(`price:${trips[i].price}`);
        console.log(`availableSeats:${trips[i].availableSeats}`);


    }
   
}

    function afficherUnTrajet(identifiant) {

    for (let i = 0; i < trips.length; i++) {

        if (trips[i].id === identifiant) {

            console.log(`id : ${trips[i].id}`);
            console.log(`departure : ${trips[i].departure}`);
            console.log(`destination : ${trips[i].destination}`);
            console.log(`departureTime : ${trips[i].departureTime}`);
            console.log(`arrivalTime : ${trips[i].arrivalTime}`);
            console.log(`price : ${trips[i].price}`);
            console.log(`availableSeats : ${trips[i].availableSeats}`);


        }
    }
}
    

const tickets = [];
let ticketsuivant=1;

function Acheterunticket(){
     let nom= prompt(`saisis nom du passager:`);
      let identifiant= Number(prompt(`saisis identifiaant du trajet:`));
       let trajettrouve=null;
        for(let i=0;i<trips.length;i++){
            
             if(trips[i].id===identifiant){
                trajettrouve=trips[i];
                break;
            }}
            if(trajettrouve===null){
    console.log(`trajet introuvable`);
    return;

   }

    
   if (trajettrouve.availableSeats <= 0) {
    console.log("Train complet.");
    return;
}
    const ticket = {
        id: ticketsuivant,
        passengerName: nom,
        tripId: identifiant,
        seatNumber:  50- trajettrouve.availableSeats + 1,
        price: trajettrouve.price
    
    };
    tickets.push(ticket);
    trajettrouve.availableSeats--;
    ticketsuivant++;
}
function Affichertikects(){

console.log(`====tickets=====`);
if(tickets.length>0){
for(i=0;i<tickets.length;i++)
{
console.log(`Ticket#${tickets[i].id}`);
console.log(`Passager:${tickets[i].passengerName}`);
let idtrip=tickets[i].tripId;
console.log(`Trajet:${trips[idtrip].departure}→${trips[idtrip].destination}`);
console.log(`Place:${tickets[i].seatNumber}`);
console.log(`Prix:${tickets[i].price}`);

}}else{ 
    console.log(`Aucun ticket enregistrè.`)
}}
function annulerticket(){
    let id=null;
let idticket=Number(prompt(`saisis identifiant ticket:`));
 for(let i=0;i<tickets.length;i++){
    
    if(idticket===tickets[i].id){
        id=idticket;
         let tripid=tickets[i].tripId;
         for(let j=0;j<trips.length;j++){
            if(tripid===trips[j].id){
                 tickets.splice(i,1);
            trips[j].availableSeats=trips[j].availableSeats+1;
            console.log(`ticket annullé avec succés.`);
            break;

            } }
break;


}
}

if(id===null){
    console.log(`Ticket introuvable`);
   
}}
function rechercherunticket(){
    let nom=prompt(`entrer le nom du passager`);
    for(i=0;i<tickets.length;i++){
        if(tickets[i].passengerName===nom){
            console.log(tickets[i]);

        }

    }

}
function filtrertrajets(){
    let villedepart=prompt(`entrer ville depart:`);
    for(i=0;i<trips.length;i++){
        if(trips[i].departure===villedepart){
            console.log(`${villedepart}→${trips[i].destination}`)
        }
    }
}
