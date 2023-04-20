import { ParsedUrlQuery } from "querystring";

export {};

declare global {
    interface IProps {
        children: JSX.Element[] | JSX.Element;
    }

    interface IPostData {
        id: string;
        date: string;
        title: string;
    }

    interface IParams extends ParsedUrlQuery {
        slug: string
    }

    namespace JSX {
        interface IntrinsicElements {
            time: React.DetailedHTMLProps<
                React.TimeHTMLAttributes<HTMLElement>,
                HTMLElement
            >;
        }
    }
}

