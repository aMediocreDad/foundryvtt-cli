/**
 * Manages the configuration of the CLI. Stored as config.yml
 */
export default class Config {
    static "__#1@#instance": any;
    /**
     * Get the singleton instance of the Config class
     * @returns {Config}
     */
    static get instance(): Config;
    configPath: string;
    /**
     * Get the entire configuration object
     * @returns {Map<string, *>}
     */
    getAll(): Map<string, any>;
    /**
     * Get a specific configuration value
     * @param {string} key      The configuration key
     * @returns {*}
     */
    get(key: string): any;
    /**
     * Set a specific configuration value
     * @param {string} key      The configuration key
     * @param {*} value         The configuration value
     */
    set(key: string, value: any): void;
    #private;
}
