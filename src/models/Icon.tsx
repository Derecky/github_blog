import { MapPin, MapPinLine, Trash, CurrencyDollar,ShoppingCart, Timer, Package,Coffee, Plus, Minus, CreditCard, Money, Bank } from "phosphor-react";

export interface IconTypesInterface {
    MapPin           ?:JSX.Element,
    MapPinLine       ?:JSX.Element,
    Trash            ?:JSX.Element,
    CurrencyDollar   ?:JSX.Element,
    ShoppingCart     ?:JSX.Element,
    Timer            ?:JSX.Element,
    Package          ?:JSX.Element,
    Coffee           ?:JSX.Element,
    Plus             ?:JSX.Element,
    Minus            ?:JSX.Element,
    CreditCard       ?:JSX.Element,
    Money            ?:JSX.Element,
    Bank             ?:JSX.Element
}

export const iconTypes: IconTypesInterface = {
    MapPin           : <MapPin weight="fill" />,
    MapPinLine       : <MapPinLine />,
    Trash            : <Trash />,
    CurrencyDollar   : <CurrencyDollar />,
    ShoppingCart     : <ShoppingCart  weight="fill" />,
    Timer            : <Timer   weight="fill" />,
    Package          : <Package  weight="fill" />,
    Coffee           : <Coffee  weight="fill" />,
    Plus             : <Plus  weight="fill" />,
    Minus            : <Minus  weight="fill" />,
    CreditCard       : <CreditCard />,
    Money            : <Money />,
    Bank             : <Bank />     
}
