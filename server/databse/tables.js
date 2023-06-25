const {query} = require("./index");

const usersCreate = `CREATE TABLE users
                     (
                         \`id\`         INT         NOT NULL AUTO_INCREMENT,
                         \`first_name\` VARCHAR(60) NOT NULL,
                         \`last_name\`  VARCHAR(60) NOT NULL,
                         \`age\`        INT         NOT NULL,
                         \`email\`      VARCHAR(80) NOT NULL,
                         \`access\`     BOOLEAN     NOT NULL,
                         \`role_id\`    INT         NOT NULL,
                         \`created_at\` TIMESTAMP   NOT NULL,
                         \`updated_at\` TIMESTAMP   NOT NULL,
                         \`deleted_at\` TIMESTAMP   NOT NULL,
                         PRIMARY KEY (\`id\`)
                     ) ENGINE = InnoDB;
`;

const role = `CREATE TABLE role
              (
                  \`id\`         INT         NOT NULL AUTO_INCREMENT,
                  \`title\`      VARCHAR(60) NOT NULL,
                  \`created_at\` TIMESTAMP   NOT NULL,
                  \`updated_at\` TIMESTAMP   NOT NULL,
                  PRIMARY KEY (\`id\`)
              ) ENGINE = InnoDB;
`

const order = `CREATE TABLE \`bushe\`.\`orders\`
               (
                   \`id\`         INT          NOT NULL AUTO_INCREMENT,
                   \`slug\`       VARCHAR(60)  NOT NULL,
                   \`address\`    VARCHAR(120) NOT NULL,
                   \`startTime\`  DATETIME     NOT NULL,
                   \`endTime\`    DATETIME     NOT NULL,
                   \`error\`      TEXT         NOT NULL,
                   \`status_id\`  INT          NOT NULL,
                   \`created_at\` INT          NOT NULL,
                   \`updated_at\` INT          NOT NULL,
                   \`deleted_at\` INT          NOT NULL,
                   \`driver_id\`  INT          NOT NULL,
                   \`hub_id\`     INT          NOT NULL,
                   PRIMARY KEY (\`id\`),
                   UNIQUE (\`slug\`)
               ) ENGINE = InnoDB;
ALTER TABLE \`orders\`
    ADD \`last_name\` VARCHAR(60) NOT NULL AFTER \`hub_id\`, ADD \`first_name\` VARCHAR(60) NOT NULL AFTER \`last_name\`, ADD \`phone\` VARCHAR(12) NOT NULL AFTER \`first_name\`, ADD \`width\` FLOAT(15) NOT NULL AFTER \`phone\`;

`

const orderStatus = `CREATE TABLE status
                     (
                         \`id\`         INT         NOT NULL AUTO_INCREMENT,
                         \`title\`      VARCHAR(60) NOT NULL,
                         \`created_at\` TIMESTAMP   NOT NULL,
                         \`updated_at\` TIMESTAMP   NOT NULL,
                         PRIMARY KEY (\`id\`)
                     ) ENGINE = InnoDB;
`

const products = `CREATE TABLE products
                  (
                      \`id\`         INT         NOT NULL AUTO_INCREMENT,
                      \`title\`      VARCHAR(60) NOT NULL,
                      \`subtitle\`      VARCHAR(80) NOT NULL,
                      \`description\`   VARCHAR(300) NOT NULL,
                      \`price\`   FLOAT NOT NULL,
                      \`width\`   FLOAT NOT NULL,
                      \`created_at\` TIMESTAMP   NOT NULL,
                      \`updated_at\` TIMESTAMP   NOT NULL,
                      PRIMARY KEY (\`id\`)
                  ) ENGINE = InnoDB;
`

//
// query(usersCreate);
// query(role);
// query(order);
// query(orderStatus);
query(products);

