"use client";
import FileList from "@/components/FileList";
import InfoIcon from "@/components/info";
import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useState } from "react";

const HomePage = () => {
  const [selectedKeys, setSelectedKeys] = useState(
    new Set<string>(["1"])
  ) as any;

  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
      <div className="col-span-1 md:col-span-2 text-3xl p-5">
        <h1>Анализ федерального ДЭГа</h1>
      </div>
      <Card className="col-span-1 md:col-span-1 min-h-[50vh]">
        <CardHeader>
          {/* <Accordion variant="bordered" disableIndicatorAnimation>
            <AccordionItem title="Навигация в графане" indicator={<InfoIcon />}>
              <div>
                <ul className=" list-disc ml-4">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
            </AccordionItem>
          </Accordion> */}
        </CardHeader>
        <CardBody>
          <div className="relative pt-[80%]">
            <iframe
              id="contentFrame"
              src="https://losevpeter.ru/grafana/d/edfqkznlpa77ka/deg?orgId=1&kiosk"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </CardBody>
      </Card>
      <Card className="col-span-1 md:col-span-1">
        <CardHeader>
          <Accordion
            variant="bordered"
            disableIndicatorAnimation
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
          >
            <AccordionItem key="1" title="Дампы" indicator={<InfoIcon />}>
              <p className=" text-small">
                Есть 2 типа дампов: <br />
                1) исходный, дамп снятый напрямую с ноды наблюдения без
                изменений. Он только машиночитаемый бизнес логики там нет.
                <br />
                2) Конвертированный дамп, дамп, который прошел конвертацию из
                исходного в PostgreSQL. Данный тип дампа можно использовать для
                аналитики. Чтобы конвертировать исходный дамп в конвертированный
                нужно запустить{" "}
                <Link
                  href="https://github.com/AlexeiScherbakov/Voting2024Converter/tree/master/src"
                  className="text-small"
                  isExternal
                >
                  программу-конвертер
                </Link>
              </p>
            </AccordionItem>
          </Accordion>
        </CardHeader>
        <Divider />

        <CardBody>
          <Table aria-label="Example static collection table" removeWrapper>
            <TableHeader>
              <TableColumn>Исходный</TableColumn>
              <TableColumn>Конвертированный</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>
                  <FileList format="raw" />
                </TableCell>
                <TableCell>
                  <FileList format="converted" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default HomePage;
