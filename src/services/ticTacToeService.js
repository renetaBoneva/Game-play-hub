import { requester } from "./requester";

export const aiResponse = async (board) => requester.post('/games/ticTacToe/AIresponse', { board });