import {AxiFetch} from "../index";

test('fetch simple data', async () => {
    try {
        const response = await AxiFetch.send('get', 'https://jsonplaceholder.typicode.com/todos/1');
        expect(response?.status).toEqual(200)
    } catch (e) {
        console.error(e)
    }
})