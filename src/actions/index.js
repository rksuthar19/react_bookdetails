export const BOOK_SELECTED = 'BOOK_SELECTED';

export function selectBook(book) {
    /*.........SELECTION BOOK IS AN ACTION CREATOR AND IT NEEDS TO RETURN AN ACTION OBJECT.............*/
    return {type: BOOK_SELECTED, payload: book};
}