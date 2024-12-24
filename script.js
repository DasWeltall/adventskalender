function openDoor(div, day) {
    const today = new Date();
    const currentDay = today.getDate(); // Holt den aktuellen Tag des Monats

    if (day > currentDay) {
        alert("Dieses Türchen kann erst am " + day + ". Dezember geöffnet werden.");
    } else {
        switch (day) {
            case 1:
                div.innerHTML = 'Warum können Elefanten nicht Fliegen? Weil sie keinen Flugzeugführerschein haben!';
                div.style.backgroundColor = 'rgb(102, 138, 83)';
                break;
            case 2:
                div.innerHTML = 'Warum können Bienen so gut rechnen? Weil sie immer summen!';
                div.style.backgroundColor = 'rgb(128, 64, 0)';
                break;
            case 3:
                div.innerHTML = 'Was sagt der große Stift zum kleinen Stift? Wachsmalstift!';
                div.style.backgroundColor = 'rgb(255, 192, 0)';
                break;
            case 4:
                div.innerHTML = 'Was macht ein Mathematiker im Garten? Wurzeln ziehen!';
                div.style.backgroundColor = 'rgb(255, 87, 51)';
                break;
            case 5:
                div.innerHTML = 'Was ist ein Keks unter einem Baum? Ein schattiges Plätzchen!';
                div.style.backgroundColor = 'rgb(102, 204, 255)';
                break;
            case 6:
                div.innerHTML = 'Was klopft an der Tür und ist grün? - Der Klopfsalat.';
                div.style.backgroundColor = 'rgb(153, 102, 255)';
                break;
            case 7:
                div.innerHTML = 'Was sucht eine Kuh im Weltraum? - Die Milchstraße!! ';
                div.style.backgroundColor = 'rgb(0, 153, 153)';
                break;
            case 8:
                div.innerHTML = 'Gehen 2 Sandkörner gemeinsam zum Strand. Da sagt das eine Sandkorn zum anderen: "Oh, hier ist aber viel los?"';
                div.style.backgroundColor = 'rgb(204, 102, 102)';
                break;
            case 9:
                div.innerHTML = 'Wo können Pilze Fußball spielen? Natürlich in der Champignons League.';
                div.style.backgroundColor = 'rgb(76, 153, 0)';
                break;
            case 10:
                div.innerHTML = 'Was kommt aus einer kaputten Kaffeemaschine? Kaputtchino! ';
                div.style.backgroundColor = 'rgb(255, 128, 128)';
                break;
            case 11:
                div.innerHTML = 'Wie nennt man jemanden, der sein Geld zum Fenster rausschmeißt? Scheinwerfer! ';
                div.style.backgroundColor = 'rgb(204, 153, 51)';
                break;
            case 12:
                div.innerHTML = 'Warum müssen im Hubschrauber immer 2 Personen sitzen? Einer hubt und einer schraubt.';
                div.style.backgroundColor = 'rgb(51, 153, 255)';
                break;
            case 13:
                div.innerHTML = 'Was tut eine Mathelehrerin bei dem Skifahren? Sie rechnet mit Brüchen!';
                div.style.backgroundColor = 'rgb(153, 204, 51)';
                break;
            case 14:
                div.innerHTML = 'Wie heißen die Geschwister vom Werwolf? - Waswolf und Wiewolf. ';
                div.style.backgroundColor = 'rgb(255, 102, 178)';
                break;
            case 15:
                div.innerHTML = 'Warum sind Politiker nicht gerne mit der der U-Bahn unterwegs? – Weil die Durchsage heißt: “Bitte zurücktreten!”';
                div.style.backgroundColor = 'rgb(102, 102, 255)';
                break;
            case 16:
                div.innerHTML = 'Was macht ein Stück Steak unter der Couch? – Es versteakt sich.';
                div.style.backgroundColor = 'rgb(255, 204, 153)';
                break;
            case 17:
                div.innerHTML = 'Wo ist der Mathelehrer, wenn es kalt ist? In der Ecke, denn da sind es 90 Grad. ';
                div.style.backgroundColor = 'rgb(0, 128, 128)';
                break;
            case 18:
                div.innerHTML = 'Geht ein Dalmatiner einkaufen, fragt die Kassiererin: "Sammeln Sie Punkte?"';
                div.style.backgroundColor = 'rgb(255, 204, 204)';
                break;
            case 19:
                div.innerHTML = 'Was schwimmt im Wasser und schielt? Ein Schielpferd!';
                div.style.backgroundColor = 'rgb(153, 255, 102)';
                break;
            case 20:
                div.innerHTML = 'Was ist eine Erdbeere? Sie ist eine Kirsche mit Gänsehaut.';
                div.style.backgroundColor = 'rgb(255, 102, 102)';
                break;
            case 21:
                div.innerHTML = 'Wie heißt ein Bär, der abschreibt? Abschreiber!';
                div.style.backgroundColor = 'rgb(128, 128, 0)';
                break;
            case 22:
                div.innerHTML = 'Welches Tier springt höher als der Eiffelturm? Der Eiffelturm kann gar nicht springen.';
                div.style.backgroundColor = 'rgb(102, 204, 153)';
                break;
            case 23:
                div.innerHTML = 'Wo findet man viele Kühe? In einem Muuuuhseum.';
                div.style.backgroundColor = 'rgb(204, 102, 255)';
                break;
            case 24:
                div.innerHTML = <a href="24.html">Open Present</a>;
                div.style.backgroundColor = 'rgb(255, 255, 153)';
                break;
            default:
                break;
        }
        div.style.fontSize = '15px'; // Setze die Schriftgröße für alle Türchen
    }
}

// Hier sind die Funktionen für die einzelnen Türchen, die die openDoor-Funktion aufrufen
function door1(div) { openDoor(div, 1); }
function door2(div) { openDoor(div, 2); }
function door3(div) { openDoor(div, 3); }
function door4(div) { openDoor(div, 4); }
function door5(div) { openDoor(div, 5); }
function door6(div) { openDoor(div, 6); }
function door7(div) { openDoor(div, 7); }
function door8(div) { openDoor(div, 8); }
function door9(div) { openDoor(div, 9); }
function door10(div) { openDoor(div, 10); }
function door11(div) { openDoor(div, 11); }
function door12(div) { openDoor(div, 12); }
function door13(div) { openDoor(div, 13); }
function door14(div) { openDoor(div, 14); }
function door15(div) { openDoor(div, 15); }
function door16(div) { openDoor(div, 16); }
function door17(div) { openDoor(div, 17); }
function door18(div) { openDoor(div, 18); }
function door19(div) { openDoor(div, 19); }
function door20(div) { openDoor(div, 20); }
function door21(div) { openDoor(div, 21); }
function door22(div) { openDoor(div, 22); }
function door23(div) { openDoor(div, 23); }
function door24(div) { openDoor(div, 24); }

