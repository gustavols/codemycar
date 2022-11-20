export type OrderProps = OrderStyleProps & {
    id: string;
    brand: string;
    code: number;
    found: string;
    model: string;
    solution: string;
}

type Props = {
    data: OrderProps;
}
