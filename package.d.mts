export default class Package {
    /**
     * Replace all non-alphanumeric characters with an underscore in a filename
     * @param {string} filename         The filename to sanitize
     * @returns {string}                The sanitized filename
     */
    static "__#2@#getSafeFilename"(filename: string): string;
    /**
     * Normalize a path to use POSIX separators
     * @param {string} pathToNormalize      The path to normalize
     * @returns {string}
     */
    static normalizePath(pathToNormalize: string): string;
    /**
     * Discover the list of all Packages in the dataPath
     * @param {string} dataPath      The path to the data directory
     * @returns {Object}             An object containing discovered packages
     */
    static discoverPackageDirectory(dataPath: string, verbose?: boolean): any;
    /**
     * Load a pack from a directory and serialize the DB entries, each to their own file
     * @param {string} packDir          The directory path to the pack
     * @param {string} outputDir        The directory path to write the serialized files
     * @param {string} dataPath         The path to the data directory
     * @param {string} compendiumName   The name of the compendium
     * @param {boolean} useYaml         Whether to use YAML instead of JSON
     * @returns {Promise<void>}
     */
    static unpackNedb(packDir: string, outputDir: string, dataPath: string, compendiumName: string, useYaml?: boolean): Promise<void>;
    /**
     * Load a pack from a directory and serialize the DB entries, each to their own file
     * @param {string} packDir          The directory path to the pack
     * @param {string} outputDir        The directory path to write the serialized files
     * @param {boolean} useYaml         Whether to use YAML instead of JSON for the output files
     * @returns {Promise<void>}
     */
    static unpackClassicLevel(packDir: string, outputDir: string, useYaml?: boolean): Promise<void>;
    /**
     * Read serialized files from a directory and write them to a pack db
     * @param {string} packDir              The directory path to the pack
     * @param {string} inputDir             The directory path to read the serialized files from
     * @param {string} compendiumName       The name of the compendium
     * @returns {Promise<void>}
     */
    static packNedb(packDir: string, inputDir: string, compendiumName: string): Promise<void>;
    /**
     * Read serialized files from a directory and write them to a pack db
     * @param {string} packDir        The directory path to the pack
     * @param {string} inputDir       The directory path to read the serialized files from
     * @returns {Promise<void>}
     */
    static packClassicLevel(packDir: string, inputDir: string): Promise<void>;
}
