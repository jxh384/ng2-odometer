/**
 * Created by Jose Andres on 6.15.17
 */
export interface Ng2OdometerConfigModel {
    animation?: string;
    format?: string;
    value?: number;
    duration?: number;
    auto?: boolean;
}

export class Ng2OdometerConfig implements Ng2OdometerConfigModel {
    animation?: string = 'slide';
    format: string = '(,ddd)';
    value?: number = 0;
    duration?: number = 2000;
    auto?: boolean = true;
}
