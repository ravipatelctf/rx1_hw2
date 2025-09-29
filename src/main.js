import { createStore } from "redux";
import profileReducer from "./profileReducer";
import { addProfile, removeProfile, calculateAverageAge } from "./actions";

const store = new createStore(profileReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    renderProfiles();
})


const idElement = document.getElementById("id");
const nameElement = document.getElementById("name");
const ageElement = document.getElementById("age");
const addProfileBtnElement = document.getElementById("addProfileBtn");
const idRemoveElement = document.getElementById("idRemove");
const removeProfileBtnElement = document.getElementById("removeProfileBtn");
const profileListingElement = document.getElementById("profileListing");
const averageAgeElement = document.getElementById("averageAge");

const handleAddProfileBtnClick = () => {
    store.dispatch(addProfile({id: idElement.value, name: nameElement.value, age: Number(ageElement.value)}))
    store.dispatch(calculateAverageAge());
}

const handleRemoveProfileBtnClick = () => {
    store.dispatch(removeProfile(idRemoveElement.value));
    store.dispatch(calculateAverageAge());
}

addProfileBtnElement.addEventListener("click", handleAddProfileBtnClick);
removeProfileBtnElement.addEventListener("click", handleRemoveProfileBtnClick);



const renderProfiles = () => {
    const state = store.getState();
    profileListingElement.innerHTML = state.profiles.map((profile) => {
        return `
            <li>${profile.id}.${profile.name}(${profile.age} years old)</li>
        `;
    }).join("");
    averageAgeElement.innerText = `Average age: ${Number(state.averageAge).toFixed(2)} years old`;
}

renderProfiles();
