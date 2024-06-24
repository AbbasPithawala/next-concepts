export default function SingleProductPage({params}: {params: {productId: string}}){
    return <>This is a product: {params.productId}</>
}