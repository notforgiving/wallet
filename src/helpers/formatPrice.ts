export const formatPrice = (str: string) => {
    let val = str.replace(/[^0-9]/g, '');
    val = val.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return val
}