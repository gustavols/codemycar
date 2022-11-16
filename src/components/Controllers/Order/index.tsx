export type OrderProps = OrderStyleProps & {
    brand: string;
    code: number;
    found: string;
    model: string;
    solution: string;
}

type Props = {
    data: OrderProps;
}
