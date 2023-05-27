/**
 * Get the command object for the launch command
 * @returns {{handler: ((function(*): Promise<void>)|*), builder: builder, describe: string, command: string}}
 */
export function getCommand(): {
    handler: (((arg0: any) => Promise<void>) | any);
    builder: builder;
    describe: string;
    command: string;
};
