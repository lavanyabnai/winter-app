declare module 'react-countup' {
    import { Component } from 'react';
    
    interface CountUpProps {
        start?: number;
        end: number;
        duration?: number;
        // Add other props as needed
    }

    export default class CountUp extends Component<CountUpProps> {}
} 