const messageShow = document.getElementById("messageShow");
const messageShow2 = document.getElementById("messageShow2");
const messageInput = document.getElementById("messageInput");
let chatM = document.getElementById("chat");

let chatCounter = 0;
let userData = [];

const botSay = (data) => {
	return ["Siapa namamu ?", `Halo ${data?.nama}. Berapa usiamu ?`, `Ohh ${data?.age}. Apa hobimu ?`, `WAW ${data?.hobby}. Keren sekali~ Byebye.`];
};

messageShow.innerHTML = botSay()[0];

function chat() {
	chatCounter++;
	if (chatCounter == 1) {
		botDelay({ nama: messageInput.value });
	} else if (chatCounter == 2) {
		botDelay({ age: messageInput.value });
	} else if (chatCounter == 3) {
		botDelay({ hobby: messageInput.value });
	} else if (chatCounter == 4) {
		finishing();
	} else {
		chatEnd();
	}
}

function botDelay(messageInputUser) {
	console.log(userData);
	setTimeout(() => {
		messageShow.innerHTML = botSay(messageInputUser)[chatCounter];
	}, [800]);
	userData.push(messageInput.value);
	messageInput.value = "";
}

function finishing() {
	messageShow.innerHTML = `Sudah selesai ${userData[0]}, Terima kasih.`;
	messageInput.value = "Terima kasih kembali";
	chatM.textContent = "Reload";

	messageShow2.innerHTML = `RESULT = Nama: ${userData[0]}, Usia: ${userData[1]}, Hobi ${userData[2]}`;
}

function chatEnd() {
	window.location.reload();
}
