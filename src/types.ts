//Weather condition

export let WeatherCondition = [
    {
        text: 'undefined',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5IUZHTXfD_YCoVVrwuWfa3GnBvHfbnoIAwA&usqp=CAU'
    },
    {
        text: 'Sunny',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5eBPn4X6zMi4vOBg6tPeeSkYIRu5_MM7Ow&usqp=CAU'
    },
    {
        text: 'Fog',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE2ALoK83jsPQSoWdB5dcIYjwCrP2qfcXSQw&usqp=CAU'
    },
    {
        text: 'Clear',
        imageUrl: 'https://wallpaperaccess.com/full/2199623.jpg'
    },
    {
        text: 'Light snow',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiuaqRDS8xOd62jJSou_0_wUKWPQD2ekxlyA&usqp=CAU'
    },
    {
        text: 'Heavy snow',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQt4lXitZx-1yFZWpCorPzhnuDZi1RVFyvg&usqp=CAU'
    },
    {
        text: 'Partly cloudy',
        imageUrl: 'https://i.pinimg.com/originals/d9/33/ca/d933caf2f54d3c31f4f8e7990dd7cd7a.jpg'
    },
    {
        text: 'Cloudy',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2U5MTvJCKUqTGmhty84MHtD0uWIHZ0jVNnw&usqp=CAU'
    },
    {
        text: 'Overcast',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJ0BuUjI7XJJmPMspdh9VEDLnyWhRzzJzJA&usqp=CAU'
    },
    {
        text: 'Light rain',
        imageUrl: 'https://wallpapersafari.com/image/4k-rain-wallpaper.jpg'
    },
    {
        text: 'Moderate rain',
        imageUrl: 'https://wallpapersafari.com/image/4k-rain-wallpaper.jpg'
    },
    {
        text: 'Heavy rain',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhIxH1gV86rfOJDbEJrknLm-hoEo4IDXRGw&usqp=CAU'
    },
    {
        text: 'Mist',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPFslRB2e_4r1Qh6ZYDueZ5ZsDvtq2ws8-g&usqp=CAU'
    }
]

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
    loading: boolean;
    uv: number;
}

export type SearchValueHandleProps = {
    searchValueHandle: (arg: string) => void;
    disabled?: boolean;
    isError: boolean;
    errMsg: string;
}

export type DailyCardsSliderProps = {
    countryToFecth: string;
    loading: boolean;
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

export type BackgroundImageProp = {
    backgroundImg: string;
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

export type showSearchBarProp =  {
    showSearchBar: boolean;
 };

 export type isScrolledProps = {
    isScrolled: boolean;
  };