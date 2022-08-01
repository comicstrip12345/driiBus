import { createSlice } from "@reduxjs/toolkit";

const userStorage = []
userStorage.push(JSON.parse(localStorage.getItem('users')))
const login = JSON.parse(localStorage.getItem('login'))
const scheduleStorage = []
scheduleStorage.push(JSON.parse(localStorage.getItem('schedule')))
const bookDetail = JSON.parse(localStorage.getItem('bookDetail'))
const paymentBookStorage = []
paymentBookStorage.push(JSON.parse(localStorage.getItem('payBookDetail')))
const paymentBookStorageReceipt = []
paymentBookStorageReceipt.push(JSON.parse(localStorage.getItem('payBookDetailReceipt')))

const initialState={
    signUp:[],
    login,
    userStorage: userStorage[0],
    busSched:[],
    scheduleStorage: scheduleStorage[0],
    seat:[],
    price:[],
    bookDetail,
    passengerNames:[],
    paymentBookStorage: paymentBookStorage[0],
    paymentBookStorageReceipt: paymentBookStorageReceipt[0]
}


const busSlice = createSlice({
    name: "busbooking",
    initialState,
    reducers:{
        addUsers:(state,action)=>{
            state.signUp.push(action.payload)
            localStorage.setItem('users',JSON.stringify(state.signUp))
        },
        addLogin:(state,action)=>{
            localStorage.setItem('login', JSON.stringify(action.payload))
        },
        logout:(state,action)=>{
            localStorage.removeItem('login')
        },
        addSchedule:(state,action)=>{
            state.busSched.push(action.payload)
        },
        postPublic:(state,action)=>{
            localStorage.setItem('schedule',JSON.stringify(state.busSched))
        },
        addSeat:(state,action)=>{
            state.seat.push(action.payload)
        },
        addPrice:(state,action)=>{
            state.price.push(action.payload)
        },
        addPassNames:(state,action)=>{
            state.passengerNames.push(action.payload)
        },
        addBooking:(state,action)=>{
            localStorage.setItem('bookDetail',JSON.stringify(action.payload))
        },
        removePassNames:(state,action)=>{
            state.passengerNames = []
            state.price = []
            state.seat = []
        },
        addPayBookDetails:(state,action)=>{
            localStorage.setItem('payBookDetail',JSON.stringify(action.payload))
        },
        addReceiptNum:(state,action)=>{
            localStorage.setItem('payBookDetailReceipt',JSON.stringify(action.payload))
        }
    }
    
})

export default busSlice.reducer
export const {addUsers,addLogin,logout,addSchedule,postPublic,addSeat,addPrice,addBooking,addPassNames,removePassNames,addPayBookDetails,addReceiptNum} = busSlice.actions