# 读取script.txt文件，将其保存到数据库中
# 数据库名称为bookmark，表名称为bookmark，字段为id，name，url，icon
# 数据库连接信息为：root:root@localhost:3306/bookmark
# 数据库编码为utf8
# 数据库字符集为utf8mb4
# 数据库排序规则为utf8mb4_general_ci
# 数据库表引擎为InnoDB
# 数据库表字符集为utf8mb4
# 数据库表排序规则为utf8mb4_general_ci
# 数据库表主键为id
# 数据库表自增为1   
with open("script.txt", "r", encoding='utf-8') as file:
    data = file.read()

import re

name = re.findall("name: '(.*?)'", data)
url = re.findall("url: '(.*?)'", data)
icon = re.findall('ico: "(.*?)"', data)

min_length = min(len(name), len(url), len(icon))
print(f"找到{min_length}条有效记录")

for i in range(min_length):
    print(f"名称: {name[i]}")
    print(f"网址: {url[i]}") 
    print(f"图标: {icon[i]}")
    # 写一个mysql语句，将其保存到数据库中
    sql = f"INSERT INTO `bookmark` (`name`, `url`, `icon`) VALUES ('{name[i]}', '{url[i]}', '{icon[i]}');"
    with open("db.sql", "a", encoding='utf-8') as file:
        file.write(sql + "\n")
    print("="*30)

