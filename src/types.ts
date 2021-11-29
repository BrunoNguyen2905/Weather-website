export type WeatherCardProps = {
    city: string;
    country: string;
    weatherIcon: string;
    temp: number;
    lastUpdate: string;
    feelLike: number;
    visibility: number;
    localTime: BigInteger;
    wind: number;
    humidity: number;
    windDirection: string;
    pressure: number;
    weatherCondition: string;
    precipitation: number;
    isFTemp: (arg: boolean) =>void;
    isFFeelLike: (arg: boolean) =>void;
    IsKphWindSpeed: (arg: boolean) =>void;
    IsInchesPressure: (arg: boolean) =>void;
    IsMilesVisbility: (arg: boolean) =>void;
    IsMmPrecipitation: (arg: boolean) =>void;

}

export type DailyCardProps = {
    time: string;
    temp: number;
    weatherCondition: string;
    weatherIcon: string;
    
}

export type DailyCardDetailProps = {
    date: string;
    time: string;
    
}

export type fontSizeProps = {
    isDegree: boolean;
}

export type twoOptionsProps = {
    firstValue: string;
    secondValue: string;
    isDegreeForTemp: boolean;
    handleCLickOption: (arg: boolean) => void;

}