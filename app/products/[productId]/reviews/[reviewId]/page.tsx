export default function Review(
    {params}: {
        params: {
            productId: String, 
            reviewId: string
        }
    }
){
    return <>This is review: {params.reviewId} for product: {params.productId}.</>
}