import { Button, Card } from "keep-react";

const Product = ({ product }) => {
    return (
        <Card
            className="!max-w-xs overflow-hidden rounded-md md:!max-w-[470px]"
            imgSrc={product.thumbnail}
            imgSize="md"
            horizontal={true}
        >
            <Card.Container className="space-y-4 p-6">
                <Card.Title className="flex items-center gap-2 text-body-5 font-medium text-metal-500 md:!text-body-4">
                    <span>{product.title}</span>
                </Card.Title>

                <Card.Container className="flex items-center justify-between">
                    <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                        <span>1,032 sqft</span>
                    </Card.Title>
                    <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                        <span>{product.brand}</span>
                    </Card.Title>
                </Card.Container>
                <Card.Container className="my-3 flex items-center justify-between">
                    <Card.Title className="text-body-3 font-medium text-metal-500">
                        $ {product.price}
                    </Card.Title>
                    <Button type="primary" size="sm">
                        Check Out
                    </Button>
                </Card.Container>
            </Card.Container>
        </Card>
    );
};

export default Product;
